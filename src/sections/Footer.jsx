import React from 'react'

const Footer = () => {
    return (
        <section
            className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className="text-white-500 flex gap-2">
                <p>Terms & Conditions.</p>
                <p>|</p>
                <p>Privacy policy</p>
            </div>
            <div className="flex gap-3">
                <div className="social-icon">
                    <a href="https://github.com/harshdeshmukh" target='_blank'>
                        <img src="/assets/github.svg" alt="github" className="w-1/2 h-1/2" />
                    </a>
                </div>

                <div className="social-icon bg-black">
                    <a href="https://www.linkedin.com/in/harshrise/">
                        <img src="/assets/linkedin.svg" alt="linkedin" className="w-1/2 h-1/2 " />
                    </a>
                </div>
                {/* <div className="social-icon">
                    <a href="">
                        <img src="/assets/X.svg" alt="twitter" className="w-1/2 h-1/2" />
                    </a>
                </div> */}
            </div>
            <p className="text-white-500">© 2025 Harshavardhan. All rights reserved.</p>
        </section>
    )
}
export default Footer
