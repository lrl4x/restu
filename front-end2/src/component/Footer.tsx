
import { FaInstagram } from "@react-icons/all-files/fa/FaInstagram";
import { FaTwitter } from "@react-icons/all-files/fa/FaTwitter";
import { FaYoutube } from "@react-icons/all-files/fa/FaYoutube";
import { FaAmazon } from "@react-icons/all-files/fa/FaAmazon";
import burgar from '../assets/Burger.png'
const Footer = () => {
    return (

        <div className="bg-black ">
            <div className="flex flex-col md:flex-row justify-center md:space-x-3 spca  py-10 p-6 ">
                <div className="">
                    <a href="/"><img src={burgar}  className="w-20" alt="Logo" /></a>
                </div>


              <div className="flex flex-col text-white ">

           
                    <div className="flex flex-col md:flex-row md:space-x-3 text-sm mt-4">
                        <a href="">ABOUT</a>
                        <a href="">LOCATIONS</a>
                        <a href="">CAREERS</a>
                        <a href="">FRANCHISING</a>
                        <a href="">GIFT CARDS</a>
                        <a href="">NUTRITIONAL INFO</a>
                        <a href="">CONTACT</a>
                        <a href="">ORDER ONLINE</a>
                    
                    </div>
                    <div className="flex space-x-3  text-3xl pt-4 pb-4">
                            <a href="https://www.instagram.com/?hl=en"><FaInstagram /></a>
                            <a href=""><FaTwitter /></a>
                            <a href=""><FaYoutube /></a>
                            <a href=""><FaAmazon /></a>
                        </div>
                        <div className="flex flex-col md:flex-row md:space-x-1 text-sm">
                            <a href="">Cookie Settings</a>
                            <a href="">Privacy Policy</a>
                            <a href="">Terms & Conditions</a>
                            <a href="">Do Not sell my info</a>
                            <a href="">Accessibility Statement</a>
                            <a href="">Site Map</a>
                            <a href="">Animal Welfare</a>
                            <a href="">E-Verify</a>
                        </div>

                        <div className="pt-10">
                            <p>©2010-2023 food Restaurants LLC. Featured products available at participating locations only. All rights reserved.</p>
                        </div>
                        </div>



            </div>
        </div>

    )
}

export default Footer