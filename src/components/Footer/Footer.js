import  '../Footer/Footer.css'

function Footer(props) {

    return (
        <div>
            <div className='footer-main-container'>
                {/* Theme Section*/}
                <div className='theme-container-title text-start pt-3 px-3'>
                    <div>
                        Theme
                    </div>
                    <div className='theme-settings d-flex gap-2'>
                        <select>
                            <option>Select Theme</option>
                        </select>
                        <button>Customize</button>
                    </div>
                </div>
                {/* Options Section*/}
                <div className='options-container-title pt-3 px-3'>
                    <div className='text-start'>
                        Options
                    </div>
                    <div className='options-content d-flex align-items-center gap-3 mt-2'>
                        <div className='option-content-item'>
                            <label className='switch'onClick={() => props.hideDateFunction()}>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                            </label>
                            <span className='span-text'>12 HOUR</span>
                        </div>
                        <div className='option-content-item'>
                            <label className='switch'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                            </label>
                            <span className='span-text'>am/pm</span>
                        </div>
                        <div className='option-content-item'>
                            <label className='switch'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                            </label>
                            <span className='span-text'>Seconds</span>
                        </div>
                        <div className='option-content-item'>
                            <label className='switch'>
                                <input type='checkbox'/>
                                <span className='slider'></span>
                            </label>
                            <span className='span-text'>Date</span>
                        </div>
                        <div className='option-content-item'>
                            <span className='span-text'>Tab title seconds</span>
                            <input className='input-color' type='color'></input>
                        </div>
                    </div>
                </div>
                {/* Share Section*/}
                <div className='share-container-title text-start pt-3 px-3'>
                    Share
                </div>
                <div className='share-container-text text-start pt-3 px-3'>
                    You can create and share Themes; customize an existing Theme, save it under a new name, then use its share link.
                </div>
                {/* Links Section*/}
                <div className='links-container mt-5 px-3'>
                    <div className='row'>
                        <ul className='col'>
                            <li><h4>Support</h4></li>
                            <il><a href='#'>Bug Repair</a></il>
                            <il><a href='#'>Suggest a Feature</a></il>
                            <il><a href='#'>Get help & support</a></il>
                        </ul>
                        <ul className='col'>
                            <li><h4>Get Involved</h4></li>
                            <il><a href='#'>Donate</a></il>
                            <il><a href='#'>Contribute</a></il>
                        </ul>
                        <ul className='col'>
                            <li><h4>Clock Tab</h4></li>
                            <il><a href='#'>Roadmap</a></il>
                            <il><a href='#'>Source Code</a></il>
                            <il><a href='#'>Contact</a></il>
                            <il><a href='#'>About</a></il>
                        </ul>
                        <ul className='col'>
                            <li><h4>Legal & conduct</h4></li>
                            <il><a href='#'>Code of Conduct</a></il>
                            <il><a href='#'>Terms of Service</a></il>
                            <il><a href='#'>Contact</a></il>
                            <il><a href='#'>Privacy Policy</a></il>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    ) 
}

export default Footer;