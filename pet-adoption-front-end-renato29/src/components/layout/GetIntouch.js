import React from 'react'

const GetInTouch = () => {
    return (
        <>
            <div className='container-fluid  '>
                <div className="row">
                    <div className="col-md-4 mt-5 ml-4 h-100 d-inline-block text-center"><h1>Get In Touch</h1></div>
                    <div className="col-xs-2 col-sm-12  m-4 text">
                        <h2>
                        <p className="card-text "> Buddy is a project from a private nonprofit organization whose mission is to build a community where people value animals and treat them with respect and kindness.</p></h2>

                        <form className="form">
                            <div className="form-group">
                                <label className="sr-only">First Name</label>
                                <label className="sr-only">Last Name</label>
                                <label className="sr-only">Email</label>
                            </div>
                            <div className="form-group">
                                <div>
                                    <label  className="sr-only float-left "></label>
                                    <input type="" className="form-control"  placeholder="Name" />
                                </div>
                                <div>
                                    <label  className="sr-only mx-auto "></label>
                                    <input type="" className="form-control" placeholder="Last Name" />
                                </div>
                                <div>
                                    <label className="sr-only"></label>
                                    <input type="" className="form-control"  placeholder="Email" />
                                </div>
                            </div>
                            <label className="sr-only mx-auto"></label>
                            <textarea className="form-control" rows="3" placeholder="Message"></textarea>

                            <button type="submit" className="btn btn-default p-3 mb-2 bg-success text-white">Confirm identity</button>

                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>



        </>

    )
}

export default GetInTouch;