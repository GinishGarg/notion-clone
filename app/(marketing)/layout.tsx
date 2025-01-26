import Navbar from "./_components/navbar";


const MarketingLayout = ({children}:{children:React.ReactNode}) => {
    return (
        <div className="h-full">
            <Navbar />
            <h1>Navbar</h1>
            <main className="h-full pt-40">
                {children}
            </main>
        </div>
      );
}
 
export default MarketingLayout;