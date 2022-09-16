import { useState ,useEffect} from 'react';
import{CopyToClipboard} from 'react-copy-to-clipboard';
const SingleEmoji= ({singleEmoji}) => {
    const [isCopied,setCopy]=useState(false);

    useEffect(_=>{
        if(isCopied){
            setTimeout(_=>{
                setCopy(false);
            },1500);
        }
    },[isCopied])
    return(
        <CopyToClipboard text ={singleEmoji} onCopy={_=>setCopy(true)}>
        <div className={`item${isCopied? 'copied':''}`}>
            <p className='emoji'>{isCopied? '♐'  :singleEmoji.emoji}</p>
        <p>{singleEmoji.emoji} -{singleEmoji.description}</p>
        
        </div>
        </CopyToClipboard>
    )
}
export default SingleEmoji;