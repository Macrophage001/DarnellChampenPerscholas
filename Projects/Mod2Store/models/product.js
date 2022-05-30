const mongoose = require('mongoose')

products = [
    {
        name: 'Crucial RAM 8GB DDR4 3200MHz',
        price: 33.99,
        stock: 17,
        imgPath: 'https://m.media-amazon.com/images/I/71exOjbZWiL._AC_SL1280_.jpg',
        description: `3200MHz RAM can downclock to 2933MHz or 2666MHz if system specification only supports 2933MHz or 2666MHz
        Improve your system's responsiveness, run apps faster and multitask with ease
        Compatibility assurance when using the Crucial System Scanner or Crucial Advisor Tool
        Micron quality and reliability is backed by superior component and module level testing and 42 years of memory expertise
        ECC Type Non-ECC, Form Factor SODIMM, Pin Count 260-pin, PC Speed PC4-25600, Voltage 12V, Rank and Configuration 1Rx16, 1Rx8 or 2Rx8 `
    },
    {
        name: 'MSI PRO Z690-A DDR4',
        price: 350,
        stock: 10,
        imgPath: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6485/6485158_sd.jpg',
        description: ` Supports 12th Gen Intel Core / Pentium / Celeron processors for LGA 1700 socket
        Supports DDR4 Memory, up to 5600(OC) MHz
        Premium Thermal Solution: Extended Heatsink Design and M.2 Shield Frozr are built for high performance system and non-stop works
        2.5G LAN Solution: Upgraded network solution for professional and multimedia use. Delivers a secure, stable and fast network connection
        Lightning M.2: Running at PCIe Gen4 x4 maximizes performance for NVMe based SSDs`
    },
    {
        name: 'Intel Core I7-10700K',
        price: 250,
        stock: 21,
        imgPath: 'https://m.media-amazon.com/images/I/71P3chRzgNL._AC_SL1500_.jpg',
        description: ` 8 Cores / 16 Threads
        Socket type LGA 1200
        Up to 5.1 GHz unlocked
        Compatible with Intel 400 series chipset based motherboards.Bus Speed: 8 GT/s
        Intel Turbo Boost Max Technology 3.0 support
        Intel Optane Memory support
        Graphics Base Frequency: 350 MHz `
    },
    {
        name: 'Gigabyte B550M DS3H',
        price: 120,
        stock: 12,
        imgPath: 'https://m.media-amazon.com/images/I/71Upd6pqalL._AC_SL1000_.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
    },
    {
        name: 'Conisy RGB LED Series 120mm Case Fan for Computer Case',
        price: 15.85,
        stock: 12,
        imgPath: 'https://m.media-amazon.com/images/I/91amc6Q3ElL._AC_SL1500_.jpg',
        description: ` Supports AMD 3rd Gen Ryzen and 3rd Gen Ryzen with Radeon Graphics Processors
        Dual Channel ECC/ Non-ECC Unbuffered DDR4, 4 DIMMs
        10 plus 2 Phases Digital Twin Power Design with 50A DrMOS
        Advanced Thermal Design with Enlarged VRM Heatsinks
        Ultra Durable PCIe 4.0 Ready x16 Slot
        Dual Ultra-Fast NVMe PCIe 4.0/3.0 x4 M.2 with One Thermal Guard
        AMP-UP Audio with ALC1200 and premium capacitor `
    },
    {
        name: 'Fiodio 22” 144Hz 1920 x 1080p Full HD Flat Computer Monitor',
        price: 179.99,
        stock: 8,
        imgPath: 'https://m.media-amazon.com/images/I/81a5wpXUqrL._AC_SL1500_.jpg',
        description: ` 22 inches Full HD TN flat computer monitor with 1920 x 1080p resolution.
        Aspect Ratio 16:9, display colors 16.7 million, contrast ratio 1000:1.
        Refresh rate 144 Hz - Reducing screen stuttering and tearing with higher refresh rate. Every image changes faster and smoother than the standard, offers you a smooth gaming experience wth quick response time of 4ms.
        Brilliant visuals - Enjoy the image accuracy and High-Definition vivid imagery with over 92% in sRGB color gamut coverage.
        Comfort home office - Productive and comfortable for everyday computing with adjustable display tilts from -5° to 15°, blue light shift and 178° wide viewing angle.
        Interface - 2 x HDMI & 1 x DP & 1x AUDIO output. (Package with DP cable, without speaker) `
    }
]

const productSchema = new mongoose.Schema({
    name:        { type: String, required: true },
    price:       { type: Number, required: true },
    stock:       { type: Number, required: true },
    imgPath:     { type: String, required: true },
    description: { type: String, required: true }
});

const Product = mongoose.model('Product', productSchema)

module.exports = { Product, products }