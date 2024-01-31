import { useReducer } from "react";

function FishBoneIshikawaDiagram(_props) {
    const [bone, setBone] = useReducer((prev, next) => ({
        ...prev, ...next
    }), {
        boneTop: [],
        boneBottom: [],
        problemStatement: '',
    })
    const addBtn = <svg width="20" height="20" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path fill="#000000" d="M19.5 7.05h-7L9.87 3.87a1 1 0 0 0-.77-.37H4.5A2.47 2.47 0 0 0 2 5.93v12.14a2.47 2.47 0 0 0 2.5 2.43h15a2.47 2.47 0 0 0 2.5-2.43V9.48a2.47 2.47 0 0 0-2.5-2.43M14 15h-1v1a1 1 0 0 1-2 0v-1h-1a1 1 0 0 1 0-2h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 1 0 2" />
    </svg>
    const delBtn = <div>
        <svg width="25" height="25" viewBox="0 0 72 72" xmlns="http://www.w3.org/2000/svg">
            <path fill="#FFF" d="M51.76 17H20.153v37.65c0 4.06 3.29 5.62 7.35 5.62H44.41c4.06 0 7.35-1.56 7.35-5.62zM31 16v-4h10v4" />
            <path fill="#ff0000" d="M51 37v20.621L48.3 60H33z" />
            <path fill="#FFF" d="M17 16h38v4H17z" />
            <path fill="none" stroke="#ff0000" strokeLinecap="round" strokeLinejoin="round" strokeMiterlimit="10" strokeWidth="2" d="M31 16v-4h10v4m10 9v31a4 4 0 0 1-4 4H25a4 4 0 0 1-4-4V25m-4-9h38v4H17zm24 12.25V55M31 28.25V55" />
        </svg>
    </div>

    const handleAddBone = () => {
        setBone({
            boneTop: [
                { measurement: '', materials: '', methods: '' },
                ...bone.boneTop,
            ],
            boneBottom: [
                ...bone.boneBottom,
                { environment: '', manpower: '', machine: '' },
            ],
        });
    };

    const handleDeleteBone = () => {
        const newBoneTop = [...bone.boneTop];
        newBoneTop.shift();
        const newBoneBottom = [...bone.boneBottom];
        newBoneBottom.pop();
        setBone({
            boneTop: newBoneTop,
            boneBottom: newBoneBottom,
        });
    };

    const handleChange = (e, index, type, field) => {
        const newValue = e.target.value;
        if (type === 'top') {
            const newBoneTop = [...bone.boneTop];
            newBoneTop[index] = {
                ...newBoneTop[index],
                [field]: newValue,
            };
            setBone({
                boneTop: newBoneTop,
                boneBottom: [...bone.boneBottom],
            });
        } else if (type === 'bottom') {
            const newBoneBottom = [...bone.boneBottom];
            newBoneBottom[index] = {
                ...newBoneBottom[index],
                [field]: newValue,
            };
            setBone({
                boneTop: [...bone.boneTop],
                boneBottom: newBoneBottom,
            });
        }
        _props.onUpdate(bone)
    };

    const handleProblemChange = (event) => {
        setBone({ problemStatement: event.target.value })
        _props.onUpdate(bone)
    }

    return (
        <>
            <div className="group-input">
                <label>
                    Fishbone or Ishikawa Diagram
                    <div onClick={handleAddBone}>{addBtn}</div>
                    <div onClick={handleDeleteBone}>{delBtn}</div>
                    <div className='instruction'>(Launch Instruction)</div>
                </label>
                <div className="fishbone-ishikawa-structure">
                    <div className="left-group">
                        <div className="grid-field field-name">
                            <div>Measurement</div>
                            <div>Materials</div>
                            <div>Methods</div>
                        </div>
                        <div className="top-field-group">
                            {bone.boneTop.map((boneTopItem, index) => (
                                <div key={index} className="grid-field fields top-field">
                                    <div><input type="text" value={boneTopItem.measurement} onChange={(e) => handleChange(e, index, 'top', 'measurement')} /></div>
                                    <div><input type="text" value={boneTopItem.materials} onChange={(e) => handleChange(e, index, 'top', 'materials')} /></div>
                                    <div><input type="text" value={boneTopItem.methods} onChange={(e) => handleChange(e, index, 'top', 'methods')} /></div>
                                </div>
                            ))}
                        </div>
                        <div className="mid"></div>
                        <div className="bottom-field-group">
                            {bone.boneBottom.map((boneBottomItem, index) => (
                                <div key={index} className="grid-field fields bottom-field">
                                    <div><input type="text" value={boneBottomItem.environment} onChange={(e) => handleChange(e, index, 'bottom', 'environment')} /></div>
                                    <div><input type="text" value={boneBottomItem.manpower} onChange={(e) => handleChange(e, index, 'bottom', 'manpower')} /></div>
                                    <div><input type="text" value={boneBottomItem.machine} onChange={(e) => handleChange(e, index, 'bottom', 'machine')} /></div>
                                </div>
                            ))}
                        </div>
                        <div className="grid-field field-name">
                            <div>Environment</div>
                            <div>Manpower</div>
                            <div>Machine</div>
                        </div>
                    </div>
                    <div className="problem-block">
                        <div className="field-name">Problem Statement</div>
                        <div className="field">
                            <textarea value={bone.problemStatement} onChange={(e) => handleProblemChange(e)}></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FishBoneIshikawaDiagram;
