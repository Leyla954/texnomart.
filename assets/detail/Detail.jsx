import React from 'react'
import { FaRegHeart } from "react-icons/fa";
import { RiScales3Line } from "react-icons/ri";
import '../detail/Detail.css'

const Detail = () => {
    return (
        <main>
            <section className="detail">
                <div className="container">
                    <h1>Xiaomi</h1>
                    <div className="head">
                        <div className="page">
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOdf9ZH31zSh4pdWCC7LLb8bg2UHICZm8g1A&s" alt="" />
                            <h5>70 ₼ <em>Cash purchase DISCOUNT!</em> </h5>
                        </div>
                        <div className="about">
                            <p className='price'>549 ₼</p>
                            <p className='status'>Status: <span>In stock</span></p>
                            <p>Credit calc</p>
                            <p className='monthly'>Monthly payment:30.50 ₼</p>
                            <div className="icons">
                                <button>Add to cart</button>
                                <div className="heart"><FaRegHeart /></div>
                                <div className="scales"><RiScales3Line /></div>
                            </div>
                            <div className="buttons">
                                <button>One click buy</button>
                                <button>Buy in parts</button>
                            </div>
                        </div>
                        <div className="payment">
                            <div className="delivery">
                                <img src="https://texnomart.az/wp-content/uploads/2021/11/draft-01.svg" alt="" />
                                <div className="text">
                                    <h6>Çatdırılma</h6>
                                    <p>Ünvana pulsuz çatdırılma</p>
                                </div>
                            </div>
                            <div className="delivery">
                                <img src="https://texnomart.az/wp-content/uploads/2021/11/draft-03.svg" alt="" />
                                <div className="text">
                                    <h6>Nağd Ödəniş</h6>
                                    <p>Çatdırıldıqda qapıda ödəniş</p>
                                </div>
                            </div>
                            <div className="delivery">
                                <img src="https://texnomart.az/wp-content/uploads/2021/11/draft-05.svg" alt="" />
                                <div className="text">
                                    <h6>Bank kartı ilə ödəniş</h6>
                                    <p>Saytda online və ya çatdırıldıqda kartla ödəniş</p>
                                </div>
                            </div>
                            <div className="delivery">
                                <img src="https://texnomart.az/wp-content/uploads/2021/11/draft-05.svg" alt="" />
                                <div className="text">
                                    <h6>Geri qaytarılma</h6>
                                    <p>Məhsulların 14 gün ərzində dəyişdirilməsi və ya qaytarılması</p>
                                </div>
                            </div>
                            <div className="delivery">
                                <img src="https://texnomart.az/wp-content/uploads/2021/11/draft-02.svg" alt="" />
                                <div className="text">
                                    <h6>Rəsmi zəmanət</h6>
                                    <p>Saytda yer alan məhsulların hər birinə 3 ilədək rəsmi zəmanət</p>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="feature">
                        <p className='features'>Features</p>
                        <table>
                            <tr>
                                <td>Brend</td>
                                <td>Xiaomi</td>
                            </tr>
                            <tr>
                                <td>Color</td>
                                <td>Red</td>
                            </tr>
                        </table>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Detail