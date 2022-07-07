import React from 'react'

const SoftSkill = ({ softSkill }) => {
    return (
        <div>  <section id="softskill" className="softSkill">
            <div className="container">

                <div className="section-title">
                    <h2>Soft skill</h2>
                    {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
                </div>
                <div className="row">
                    {softSkill?.map(item => (
                        <div className="col-lg-4 col-md-6 icon-box" key={item._id}>
                            <div className="icon center text-center"><i className={item.icons}></i></div>
                            <h4 className="title text-center text-#149ddd">{item.name}</h4>
                        </div>
                    ))}
                </div>

            </div>
        </section></div>
    )
}

export default SoftSkill