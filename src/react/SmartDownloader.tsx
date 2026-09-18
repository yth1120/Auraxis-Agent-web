import { useState, useEffect, useCallback } from 'react';
import { Monitor, Apple, Terminal, Info, Loader2 } from 'lucide-react';
import { detectPlatform, detectArch, PLATFORM_LABELS } from '../utils/platform';
import { LanguageProvider, useLanguage } from '../i18n/LanguageContext';
import type { ReleaseInfo, DownloadAsset, Platform } from '../types';

interface DownloadButton {
  platform: Platform;
  Icon: typeof Monitor;
  label: string;
}

const DOWNLOAD_OPTIONS: DownloadButton[] = [
  { platform: 'windows', Icon: Monitor, label: 'Windows' },
  { platform: 'mac', Icon: Apple, label: 'macOS' },
  { platform: 'linux', Icon: Terminal, label: 'Linux' },
];

function SmartDownloaderInner() {
  const { t } = useLanguage();
  const [detected, setDetected] = useState<Platform>('linux');
  const [arch, setArch] = useState<'arm64' | 'x64' | 'unknown'>('unknown');
  const [release, setRelease] = useState<ReleaseInfo | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => { setDetected(detectPlatform()); }, []);

  useEffect(() => {
    let cancelled = false;
    detectArch().then((a) => { if (!cancelled) setArch(a); });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(`${import.meta.env.BASE_URL}releases.json`)
      .then(async (res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<ReleaseInfo>;
      })
      .then((data) => {
        if (cancelled) return;
        setRelease(data);
      })
      .catch((err: Error) => { if (!cancelled) { console.error(err); setError(err.message); } })
      .finally(() => { if (!cancelled) setLoading(false); });
    return () => { cancelled = true; };
  }, []);

  const handleDownload = useCallback((platform: Platform) => {
    const baseAsset = release?.downloads[platform];
    const asset: DownloadAsset | undefined =
      platform === 'mac' && arch === 'arm64' && baseAsset?.alt ? baseAsset.alt : baseAsset;
    if (asset?.url && asset.url !== '#') {
      window.open(asset.url, '_blank', 'noopener,noreferrer');
    } else {
      const fallback: Record<string, string> = {
        windows: 'Windows (NSIS)', mac: 'macOS (Universal DMG)', linux: 'Linux (AppImage)',
      };
      window.alert(`${t.download_unavailable}${fallback[platform]}`);
    }
  }, [release, arch, t]);

  const isMobile = detected === 'mobile';

  const platformTips: Record<string, string> = {
    windows: t.download_windows_tip, mac: t.download_mac_tip, linux: t.download_linux_tip,
  };

  return (
    <div className="flex flex-col gap-3">
      {isMobile && (
        <div className="flex items-start gap-2 px-3 py-2 bg-brand-warning/10 border border-brand-warning/30 rounded-lg text-brand-warning text-xs" role="alert">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" aria-hidden="true" />
          <span>{t.download_mobile_warning}</span>
        </div>
      )}
      {error && !loading && (
        <div className="text-[10px] text-brand-warning font-mono">{t.download_error}</div>
      )}
      <div className="bg-white dark:bg-brand-card border border-brand-hairline dark:border-brand-border p-4 rounded-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <p className="text-[10px] text-brand-faint font-mono uppercase tracking-wider">
            {t.download_current_version}
          </p>
          <h3 className="text-sm font-medium text-ink dark:text-ivory">
            {loading ? (
              <span className="inline-flex items-center gap-1.5 text-brand-muted">
                <Loader2 className="w-3 h-3 animate-spin" aria-hidden="true" />
                {t.download_loading}
              </span>
            ) : (
              `Auraxis Agent ${release?.version ?? '3.4.0'}`
            )}
          </h3>
          {!isMobile && !loading && (
            <p className="text-[10px] text-brand-accent font-mono mt-0.5">
              {t.download_detected} {PLATFORM_LABELS[detected]}{detected === 'mac' && arch === 'arm64' ? ' (arm64)' : ''}
            </p>
          )}
        </div>
        <div className="flex items-center gap-1.5 flex-shrink-0">
          {DOWNLOAD_OPTIONS.map(({ platform, Icon, label }) => {
            const isActive = detected === platform;
            const baseAsset = release?.downloads[platform];
            const asset = platform === 'mac' && arch === 'arm64' && baseAsset?.alt ? baseAsset.alt : baseAsset;
            return (
              <button
                key={platform}
                onClick={() => handleDownload(platform)}
                disabled={isMobile}
                aria-label={platformTips[platform]}
                title={asset ? (asset.size ? `${asset.label} — ${asset.size}` : asset.label) : platformTips[platform]}
                className={`inline-flex items-center gap-1.5 text-xs font-medium px-3 h-9 rounded transition-colors whitespace-nowrap border ${isActive ? 'bg-brand-accent/15 text-brand-accent border-brand-accent/40 hover:bg-brand-accent/25' : 'bg-white dark:bg-brand-dark hover:bg-black/5 dark:hover:bg-white/5 text-brand-ink2 dark:text-brand-text border-brand-hairline dark:border-brand-border'} ${isMobile ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                <Icon className="w-4 h-4" aria-hidden="true" />
                <span>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function SmartDownloader() {
  return <LanguageProvider><SmartDownloaderInner /></LanguageProvider>;
}
