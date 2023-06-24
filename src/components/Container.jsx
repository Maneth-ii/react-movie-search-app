/* eslint-disable react/prop-types */

export const Container = ({children}) => {
    return(
        <div className="w-[96%]  mx-auto mt-4 min-h-[90vh] bg-black- backdrop-blur-lg">
            {children}
        </div>
    )
}

