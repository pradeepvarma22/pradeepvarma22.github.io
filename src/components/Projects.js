// Import Assets
import uniswap from '../assets/uniswap.png';
import DAO_Image from '../assets/dao-image.png';
import ico_image from "../assets/ico_image.jpg";
import dokumint_image from "../assets/dokumint.png";
import INDIGGator_image from "../assets/INDIGGator.png";
import fildrop_image from "../assets/fildrop.png";


const Projects = () => {
    return (
        <div>
            <section className="projects">
                <h2>My Projects</h2>

                <div className="projects__cards">

                    <div className="projects__card">
                        <h3>Uniswap</h3>
                        <img src={uniswap} alt="Uniswap Swap Page" />
                        <p className="text-justify">
                            An instant cryptocurrency exchange powered by the Ethereum Blockchain.
                            Exchange with one asset pair (Eth / ERC20 Varma Token) and vice versa.
                            <br />
                            <br />

                        </p>
                        <a href="https://uniswap-mu.vercel.app/" target="_blank" className="button">Site</a>
                        <a href="https://github.com/pradeepvarma22/Uniswap" target="_blank" className="button">Code</a>
                    </div>

                    <div className="projects__card">
                        <h3>ICO</h3>
                        <img src={ico_image} alt="ICO" />
                        <p className="text-justify">
                            ICO, Funds are raised for a new cryptocurrency venture. Users who have NFT's
                            can get some ICO ERC20 tokens for free. The rest of them need to buy ERC20 tokens.
                        </p>
                        <a href="https://ico-tan-nine.vercel.app/" target="_blank" className="button">Site</a>
                        <a href="https://github.com/pradeepvarma22/ICO" target="_blank" className="button">Code</a>
                    </div>

                    <div className="projects__card">
                        <h3>DAO</h3>
                        <img src={DAO_Image} alt="DAO" />
                        <p className='text-justify'>
                            A Decentralised Autonomous Organisation whose members share a common goal of acting in the best interest of the entity. Voting and governance are entirely on-chain.                        <br />
                        </p>
                        <a href="https://github.com/pradeepvarma22/DAO" target="_blank" className="button">Code</a>
                        <a href="https://mumbai.polygonscan.com/address/0xFe8E2e3E07224170eB9E0CEfa1da2c4C5D63d50C" target="_blank" className="button">ENV</a>

                    </div>



                </div>
            </section>


            <section className="projects">
                <h2>Hackathon Submissions</h2>

                <div className="projects__cards">

                    <div className="projects__card">
                        <h3>
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.243 11.757l5.25-4.886a1.3 1.3 0 00.144-1.745l-1.247-1.62A1.3 1.3 0 0019.36 3H5m7 7l3-3m-3 3L9 7m3 3a6 6 0 100 12 6 6 0 000-12zm3-3H9m6 0l4-4M5 3a1.3 1.3 0 00-1.03.507L2.7 5.154a1.3 1.3 0 00.117 1.718l4.94 4.885M5 3l4 4" stroke="currentColor" stroke-width="1.5">
                                </path>
                            </svg>
                            DokuMint
                        </h3>
                        <img src={dokumint_image} alt="dokumint_image" />
                        <p>
                            {"ETHIndia hackathon (February – April 2022)"}

                            <p className="text-justify">
                                Showcase your certificates as NFTs.
                            </p>
                        </p>
                        <br />
                        <a href="https://devfolio.co/projects/dokumint-cbc5" target="_blank" className="button">Link</a>
                        <a href="https://github.com/pradeepvarma22/dokumint" target="_blank" className="button">Code</a>
                    </div>




                    <div className="projects__card">
                        <h3>
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.243 11.757l5.25-4.886a1.3 1.3 0 00.144-1.745l-1.247-1.62A1.3 1.3 0 0019.36 3H5m7 7l3-3m-3 3L9 7m3 3a6 6 0 100 12 6 6 0 000-12zm3-3H9m6 0l4-4M5 3a1.3 1.3 0 00-1.03.507L2.7 5.154a1.3 1.3 0 00.117 1.718l4.94 4.885M5 3l4 4" stroke="currentColor" stroke-width="1.5">
                                </path>
                            </svg>
                            INDIGGator
                        </h3>
                        <img src={INDIGGator_image} alt="INDIGGator" />
                        <p>
                            {"Warpspeed hackathon (May 2022)"}

                            <p className="text-justify">
                                An App for Scholars to learn about P2E games via quizzes and avail NFTs.
                            </p>
                        </p>
                        <br />
                        <a href="https://devfolio.co/projects/indiggator-6a48" target="_blank" className="button">Link</a>
                        <a href="https://github.com/meta-ps/IndiGGator" target="_blank" className="button">Code</a>
                    </div>




                    <div className="projects__card">
                        <h3>
                            <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M16.243 11.757l5.25-4.886a1.3 1.3 0 00.144-1.745l-1.247-1.62A1.3 1.3 0 0019.36 3H5m7 7l3-3m-3 3L9 7m3 3a6 6 0 100 12 6 6 0 000-12zm3-3H9m6 0l4-4M5 3a1.3 1.3 0 00-1.03.507L2.7 5.154a1.3 1.3 0 00.117 1.718l4.94 4.885M5 3l4 4" stroke="currentColor" stroke-width="1.5">
                                </path>
                            </svg>
                            FILDrop
                        </h3>
                        <img src={fildrop_image} alt="FILDrop" />
                        <p>
                            {"BITS Web3 Week Hackathon (June 2022) "}

                            <p className="text-justify">
                                Backup your images to IPFS storage and convert them into NFTs.
                            </p>
                        </p>
                        <a href="https://devfolio.co/projects/fildrop-beb9" target="_blank" className="button">Link</a>
                        <a href="https://github.com/meta-ps/FilDrop" target="_blank" className="button">Code</a>
                    </div>


                </div>
            </section>
        </div>
    );
}

export default Projects;