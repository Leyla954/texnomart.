import React from 'react'
import { IoIosCloseCircleOutline } from "react-icons/io";

import './Scales.css'

const Scales = () => {
    return (
        <main>
            <section className="muqaise">
                <h1>Müqayisə</h1>
                <table>
                    <tr>
                        <th className='info'>Product Info</th>
                        <th className='img'>
                            <div className="close"><IoIosCloseCircleOutline /></div>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdf9ZH31zSh4pdWCC7LLb8bg2UHICZm8g1A&s" alt="" />
                            <p>Smartfon Xiaomi Poco F4 GT 8/128GB Black</p>
                            <button>ADD TO CARD</button>
                        </th>
                    </tr>
                    <tr>
                        <td>Price</td>
                        <td>50$</td>
                    </tr>
                    <tr>
                        <td>Brend</td>
                        <td>Xiaomi</td>
                    </tr>
                    <tr>
                        <td>Color</td>
                        <td>Red</td>
                    </tr>
                </table>
            </section>
        </main>
    )
}

export default Scales






