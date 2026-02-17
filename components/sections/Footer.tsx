export default function Footer(){
    return(
        <div className="flex md:hidden bg-black flex-col p-8 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
            <div className="justify-center items-center">
                <p className="text-white text-center">
                    © {new Date().getFullYear()} Ziad Hisham. All rights reserved.
                </p>
            </div>
        </div>
    )
}