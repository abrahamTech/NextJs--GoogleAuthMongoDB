
const SignInBtn = () => {
    return (
        <div>
            <button className="google-btn flex items-center gap-4 relative shadow-xl rounded-lg pl-4 overflow-hidden hover:shadow-indigo-400/40 transition-all ease-in-out duration-300">
                <div className="google-icon-wrapper mt-1">
                    <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"/>
                </div>
                <p className="btn-text text-gray-700 text-lg px-4 py-3 mt-1">Sign in with Google</p>
            </button>
        </div>
    )
}

export default SignInBtn;