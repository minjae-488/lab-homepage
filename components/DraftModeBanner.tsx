'use client'

export function DraftModeBanner() {
    return (
        <div style={{
            position: 'fixed',
            bottom: '1.5rem',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999,
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            background: 'rgba(20, 20, 20, 0.92)',
            backdropFilter: 'blur(8px)',
            color: '#fff',
            borderRadius: '9999px',
            padding: '0.6rem 1.2rem',
            fontSize: '0.875rem',
            fontWeight: 500,
            boxShadow: '0 4px 24px rgba(0,0,0,0.3)',
            border: '1px solid rgba(255,255,255,0.1)',
            whiteSpace: 'nowrap',
        }}>
            <span style={{
                width: '8px', height: '8px', borderRadius: '50%',
                background: '#f59e0b',
                display: 'inline-block',
                animation: 'pulse 1.5s infinite',
                flexShrink: 0,
            }} />
            <span>미리보기 모드 — 미게시 초안이 표시됩니다</span>
            <a href="/api/draft-exit" style={{
                marginLeft: '0.5rem',
                background: '#f59e0b',
                color: '#000',
                borderRadius: '9999px',
                padding: '0.25rem 0.75rem',
                fontWeight: 700,
                fontSize: '0.8rem',
                textDecoration: 'none',
                transition: 'opacity 0.2s',
            }}>
                미리보기 종료
            </a>
            <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }`}</style>
        </div>
    )
}
