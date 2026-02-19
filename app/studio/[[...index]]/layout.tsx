/**
 * Studio 전용 레이아웃
 * 루트 layout.tsx의 Header/Footer를 제거하고
 * Sanity Studio가 전체 화면을 차지하도록 합니다.
 */
export default function StudioLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
