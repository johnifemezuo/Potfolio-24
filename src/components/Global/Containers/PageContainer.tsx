export const PageContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="w-full px-3 xl:px-12">
            {children}
        </div>
    );
}