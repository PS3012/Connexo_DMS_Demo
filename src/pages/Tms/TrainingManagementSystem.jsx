import './TrainingManagementSystem.css';

function TrainingManagementSystem() {
    return (
        <>

            <div className='TrainingManagementSystem-page'>
                <div className='details-form'>
                    <form>
                        <div className='details-form-heading'>Basic Information</div>
                        <div className='details-form-data'>

                            <div className="group-input">
                                <label className='font-weight-detailsform'><b>Training Plan Name</b></label>
                                <input type="text" className="form-control" />
                            </div>

                            <div className='group-input-flex'>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Plan ID</b></label>
                                    <div className='static'>Not-Applicable</div>
                                </div>

                                <div className="group-input">
                                    <label className='font-weight-detailsform'><b>Training Plan Type</b></label>
                                    <select id="training-select" name="training_plan_type" required="">
                                        <option value="">---</option>
                                        <option value="Read &amp; Understand">Read &amp; Understand</option>
                                        <option value="Read &amp; Understand with Questions">Read &amp; Understand with Questions </option>
                                        <option value="Classroom Training">Classroom Training</option>
                                    </select>
                                </div>
                            </div>

                            <div className="group-input">
                                <label className='font-weight-detailsform'><b>Training Plan Description <span className="required">&nbsp;*</span></b></label>
                                <textarea className="form-control" name="w3review" rows="3" cols="50"></textarea>
                            </div>
                            
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default TrainingManagementSystem;
