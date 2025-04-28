import React from "react";
import AnimatePage from "../Components/AnimatePage";

const CookiePolicy = () => {
    return (
        <AnimatePage>
            <div className="max-w-[1100px] w-full mx-auto text-color-primary pt-40 sm:pt-44 lg:pt-52 pb-18 sm:pb-28 lg:pb-38 px-3 sm:px-4 md:px-5 font-font1 text-sm md:text-base lg:text-lg">
                <h4 className="font-bold font-font2 text-6xl xl:text-7xl 2xl:text-8xl uppercase">
                    Cookie Policy
                </h4>
                <div className="">
                    <p className="font-semibold mt-5">
                        Last updated: 22-Jan-2024
                    </p>
                    <p className="font-semibold my-5">What are cookies?</p>
                    <p>
                        This Cookie Policy explains what cookies are and how we
                        use them, the types of cookies we use, i.e., the
                        information we collect through cookies and how we use
                        it, and how to manage your cookie settings.
                    </p>
                    <p className="mt-4 md:mt-5">
                        Cookies are small text files used to store small pieces
                        of information. They are stored on your device when the
                        website is loaded on your browser. These cookies help us
                        make the website function properly, make the website
                        more secure, provide better user experience, understand
                        how the website performs and analyze what works and
                        where it needs improvement.
                    </p>

                    <p className="mt-4 md:mt-5 font-semibold">
                        How do we use cookies?
                    </p>
                    <p className="mt-4 md:mt-5">
                        Like most online services, our website uses first-party
                        and third-party cookies for various purposes.
                        First-party cookies are mostly necessary for the website
                        to function properly and do not collect any personal
                        data.
                    </p>
                    <p className="mt-4 md:mt-5">
                        The third-party cookies used on our website are mainly
                        used to understand how the website performs, how you
                        interact with our website, keeping our services secure,
                        providing advertisements that are relevant to you, and
                        ultimately providing you with a better and improved user
                        experience and speeding up your future interactions with
                        our website.
                    </p>

                    <p className="mt-8 md:mt-10 font-semibold">
                        Managing cookie preferences
                    </p>
                    <p className="mt-4 md:mt-5">
                        You can change your cookie preferences at any time by
                        clicking the button above. This will allow you to
                        revisit the cookie consent banner and change your
                        preferences or withdraw your consent immediately.
                    </p>
                    <p className="mt-4 md:mt-5">
                        Depending on the applicable law, you may have the right
                        to access your personal data, to rectify or erase it or
                        to receive a copy of it, to limit or object to the
                        active processing of your data, to ask us to share
                        (port) your personal data to another entity, to withdraw
                        the consent to the processing of your data provided by
                        you, to lodge a complaint with a legal authority and to
                        exercise other rights provided by applicable laws. To
                        exercise these rights, you may write to us at
                        info@saporienatura.it. We will respond to your request
                        in accordance with applicable law.
                    </p>
                    <div className="mt-4 md:mt-5">
                        <p className=" font-semibold whitespace-nowrap">
                            Chrome:{" "}
                        </p>
                        <a
                            href="https://support.google.com/accounts/answer/32050"
                            target="_blank"
                        >
                            https://support.google.com/accounts/answer/32050
                        </a>
                    </div>
                    <div className="mt-4 md:mt-5">
                        <p className=" font-semibold">Safari: </p>
                        <a
                            href="https://support.apple.com/it-it/guide/safari/sfri11471/mac"
                            target="_blank"
                        >
                            https://support.apple.com/it-it/guide/safari/sfri11471/mac
                        </a>
                    </div>
                    <div className="mt-4 md:mt-5">
                        <p className="font-semibold">Firefox: </p>
                        <a
                            href="https://support.mozilla.org/it/kb/Eliminare%20i%20cookie?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US"
                            target="_blank"
                        >
                            https://support.mozilla.org/it/kb/Eliminare%20i%20cookie?redirectslug=delete-cookies-remove-info-websites-stored&redirectlocale=en-US
                        </a>
                    </div>
                    <div className="mt-4 md:mt-5">
                        <p className="font-semibold whitespace-nowrap">
                            Internet Explorer:
                        </p>
                        <a
                            href=" https://support.microsoft.com/it-it/topic/come-eliminare-i-file-cookie-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc"
                            target="_blank"
                        >
                            https://support.microsoft.com/it-it/topic/come-eliminare-i-file-cookie-in-internet-explorer-bca9446f-d873-78de-77ba-d42645fa52fc
                        </a>
                    </div>

                    <p className="mt-4 md:mt-5">
                        If you are using another web browser, please consult
                        your browser's official support documents.
                    </p>
                </div>
            </div>
        </AnimatePage>
    );
};

export default CookiePolicy;
