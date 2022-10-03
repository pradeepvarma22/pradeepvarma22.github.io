// Import Assets
import profile from '../assets/profile.png';
import resumePdf from '../assets/resume.pdf';


const Header = () => {
    return (
        <section className='header'>
            <img src={profile} alt="pradeep" />

            <div className='header__content'>
                <h1>Hi, I'm Pradeep</h1>
                <p>Full Stack Blockchain Developer</p>
                <div>
                    <div className='p-5 space-x-2'>

                        <a href='mailto:pradeepvarma2292@example.com' className='w-full py-3.5 text-xl text-center text-white transition-colors duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease px-9 md:w-auto'>Email</a>
                        <a href='https://github.com/pradeepvarma22' className='w-full py-3.5 text-xl text-center text-white transition-colors duration-300 bg-blue-400 rounded-md hover:bg-blue-500 ease px-9 md:w-auto'>Github</a>
                    </div>
                    <div>

                        <a href={resumePdf} className="underline hover:no-underline" target="_blank">Resume</a>
                        <div>
                            📍 Hyderabad, India
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

export default Header;