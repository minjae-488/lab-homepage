'use client'

export function DraftModeBanner() {
    return (
        <div
            style={{
                position: 'fixed',
                bottom: '1rem',
                left: '50%',
                transform: 'translateX(-50%)',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
                background: '#1a1a2e',
                color: '#f0f0f0',
                padding: '0.6rem 1.2rem',
                borderRadius: '9999px',
                boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
                fontSize: '0.875rem',
                fontWeight: 500,
            }}
        >
            <span
                style={{
                    width: '8px',
                    height: '8px',
                    borderRadius: '50%',
                    background: '#f59e0b',
                    display: 'inline-block',
                    animation: 'pulse 1.5s ease-in-out infinite',
                }}
            />
            <span>미리보기 모드 — 미게시 초안이 표시됩니다</span>
            <a
                href="/api/draft-exit"
                style={{
                    background: '#f59e0b',
                    color: '#1a1a2e',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.75rem',
                    fontWeight: 700,
                    textDecoration: 'none',
                    fontSize: '0.8rem',
                }}
            >
                미리보기 종료
            </a>
            <style>{`
                @keyframes pulse {
                    0%, 100% { opacity: 1; }
                    50% { opacity: 0.4; }
                }
            `}</style>
        </div>
    )
}
