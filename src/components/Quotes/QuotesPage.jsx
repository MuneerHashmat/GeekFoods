import Navbar from "../Navbar";
import Footer from "../Footer";
import QuoteCard from "./QuoteCard";
import quoteList from "../../Data/quotes.json"
const QuotesPage=()=>{
    return (
        <>
            <Navbar />
            <div className=" pt-32 text-center">
                {
                    quoteList.map((quoteItem,idx)=>
                        <QuoteCard key={idx} quote={quoteItem.quote} author={quoteItem.author}/>
                    )
                }
            </div>
            <Footer />
        </>
    )
}

export default QuotesPage;