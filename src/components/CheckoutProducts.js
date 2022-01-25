import { StarIcon } from "@heroicons/react/outline"
import Image from "next/dist/client/image"
import Currency from "react-currency-formatter"
import { useDispatch } from "react-redux"
import { addToBasket, removeFromBasket } from "../slices/basketSlice"


function CheckoutProducts({
    id,
    title,
    price,
    rating,
    description,
    category,
    image,
    hasPrime    
    }) 

{
    const dispatch= useDispatch()

    // to add item
    const addItemToBasket = ()=>{
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime  
        }
        // PUSH ITEM TO BASKET
        dispatch(addToBasket(product))
    }

    // to remove item
    const removeItemFromBasket = ()=>{
        const product = {
            id,
            title,
            price,
            rating,
            description,
            category,
            image,
            hasPrime  
        }
        // remove item from basket/redux
        dispatch(removeFromBasket({id}))
    }
  return (
    <div className="grid grid-cols-5">
      <Image src={image}
        height={200}
        width={ 200}
        objectFit="contain"
      ></Image>

        {/* middle section */}
        <div className="col-span-3 mx-5">
            <p>{title}</p>
        
            <div className="flex">
                {Array(rating).fill().map((_,i)=>(
                    <StarIcon 
                        key={i}
                        className="h-5 text-yellow-500"    
                    />
                ))}
            </div>

            <p className="text-xs mt-2 my-2 line-clamp-3">
                {description}
            </p>
            <Currency quantity={price} currency="GBP" />
            {hasPrime && (
                <div className="flex items-center space-x-2">
                    <img 
                        className="w-12"
                        loading="lazy"
                        src="https://links.papareact.com/fdw" alt=""
                        
                    />
                    <p className="text-xs text-gray-500">
                        Free Next Day Delivery
                    </p>
                </div>
            )}
        </div>

        {/* right section */}
        <div className="flex flex-col space-y-2 my-auto justify-self-end">
            <button className="button" onClick={addItemToBasket}> Add to Basket</button>
            <button className="button" onClick={removeItemFromBasket}>Remove</button>
        </div>
    </div>

  )
}

export default CheckoutProducts
