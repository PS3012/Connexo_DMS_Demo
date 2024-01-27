const URL = 'http://195.35.6.197:9091';
const create = '/create'
const getByID = '/GetBy/'
const getAll = '/findAllDivision'

const LabIncident = '/LabIncident/api'
const ChangeControl = '/changeControl/api'

export const LabIncidentCreate = URL + LabIncident + create;
export const LabIncidentGetById = URL + LabIncident + getByID;

export const ChangeControlCreate = URL + ChangeControl + create;
export const ChangeControlGetAll = URL + ChangeControl + getAll;