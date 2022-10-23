const Error = () => {
    return (
        // <div className="className='pt-28'">
        //     <div className='flex justify-items-center justify-center min-h-full'>
        //         <div className='text-center'>
        //             <h3 className='text-3xl text-rose-700 font-bold uppercase my-2'>
        //                 404! page not found
        //             </h3>
        //             <p className='text-base font-bold capitalize'>
        //                 sorry invalid path name try again
        //             </p>
        //         </div>
        //     </div>
        // </div>
        <div className='pt-28 lg:w-9/12 m-auto space-y-6 px-4'>
            <div className='text-center'>
                <h3 className='text-3xl text-rose-700 font-bold uppercase my-2'>
                    404! page not found
                </h3>
                <p className='text-base font-bold capitalize'>
                    sorry invalid path name try again
                </p>
            </div>

        </div>
    );
};

export default Error;
