export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="max-w-[1440px] mx-auto px-3 xl:px-12">
            {children}
        </div>
    );
}