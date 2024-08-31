import './enrolled-cards.css'
import Enrollcardstruc from '../enrollcardstruc/Enrollcardstruc';
import image1 from "../enrollcardstruc/react-native_large.png";
import image2 from "../enrollcardstruc/reactimg.png";
export default function Enrolled_cards()
{
     
    return(
        <>
          <Enrollcardstruc image = {image1} number ={0} />
          <Enrollcardstruc image = {image2} number ={1} />
        </>
    )
}