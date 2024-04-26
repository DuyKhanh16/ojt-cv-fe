// AUTH
export const API_REGISTER_CANDIDATE = "/auth/register-candidate";

export const API_REGISTER_COMPANY = "/auth/register-company";
export const API_LOGIN = "/auth/login";
export const API_LOGIN_BY_GOOGLE = "/auth/loginByGoogle";
export const API_FORGET_PASSWORD = "/auth/forgetPassword";
export const API_GETOTP = "/auth/getOTP";

//HET AUTH

// ACCOUNT
export const API_UPDATE_ACCOUNT_BYID = "/account/update";
export const API_GET_ID_AUTH = "/account/id-auth";


// HET ACCOUNT

//CANDIDATE
export const API_CANDIDATE_GETALL = "/candidates/getAll";
export const API_CANDIDATE_GETINFOR = "/candidates/getInfor";
export const API_CANDIDATE_GETALLINFORMATION = "/candidates/getAllInformation";
export const API_CANDIDATE_UPDATEABOUTME = "/candidates/updateAboutMe";
export const API_CANDIDATE_UPDATEINFORCANDIDATE = "/candidates/updateInfoCandidate";
export const API_CANDIDATE_GETINFORCANDIDATE_BYID = "/candidates/getInforCandidateById";
export const API_CANDIDATE_SEARCHCANDIDATE = "/candidates/searchCandidate";
export const API_CANDIDATE_GETALLPROJECT = "/candidate/getAllProject";
export const API_CANDIDATE_CREATEPROJECT = "/candidate/createProject";
export const API_CANDIDATE_UPDATEPROJECT_BYID = "/candidate/updateProject";
export const API_CANDIDATE_DELETEPROJECT_BYID = "/candidate/deleteProject";
export const API_CANDIDATE_GETALLSKILLS = "/candidate/getAllSkills";
export const API_CANDIDATE_CREATESKILL = "/candidate/createSkill";
export const API_CANDIDATE_UPDATESKILL_BYID = "/candidate/updateSkill";
export const API_CANDIDATE_DELETESKILL_BYID = "/candidate/deleteSkill";
export const API_CANDIDATE_GETALLEDUCATIONCANDIDATE = "/candidate/getAllEducationCandidate";
export const API_CANDIDATE_CREATEDUCATION = "/candidate/createEducation";
export const API_CANDIDATE_UPDATEEDUCATION_BYID = "/candidate/updateEducation";
export const API_CANDIDATE_DELETEEDUCATION_BYID = "/candidate/deleteEducation";
export const API_CANDIDATE_GETALLEXPERIENCE = "/candidate/getAllExperience";
export const API_CANDIDATE_CREATEEXPERIENCE = "/candidate/createExperience";
export const API_CANDIDATE_UPDATEEXPERIENCE_BYID = "/candidate/updateExperience";
export const API_CANDIDATE_DELETEEXPERIENCE_BYID = "/candidate/deleteExperience";
export const API_CANDIDATE_GETALLCERTIFICATE = "/candidate/getAllCertificate";
export const API_CANDIDATE_CREATECERTIFICATE = "/candidate/createCertificate";
export const API_CANDIDATE_UPDATECERTIFICATE_BYID = "/candidate/updateCertificate";
export const API_CANDIDATE_DELETECERTIFICATE_BYID = "/candidate/deleteCertificate";
export const API_CANDIDATE_SAVEJOB = "/candidates/candidate-save-job";
export const API_CANDIDATE_GETJOBSAVE = "/candidates/getJobSave";
export const API_CANDIDATE_CHECKSAVEJOB = "/candidates/checkSaveJob";

// HET CANDIDATE

//COMPANY
export const API_COMPANY_GETINFOR = "/companies/getInfor";
export const API_COMPANY_GETALL = "/companies/getAll";
export const API_COMPANY_GETBRAND_BYID = "/companies/getbrandcompany";
export const API_COMPANY_UPDATEINFOR_BYID = "/companies/update-info";
export const API_COMPANY_CREATE_ADDRESS_BYID = "/companies/create-address";
export const API_COMPANY_DELETE_ADDRESS_BYID = "/companies/delete-address-company";
export const API_COMPANY_UPDATE_ADDRESS_BYID = "/companies/update-address";
export const API_COMPANY_GETINFOR_BYID = "/companies/getInfoCompanyById";
export const API_COMPANY_FLOW_BYID = "/companies/flow";


//HET COMPANY

// brand company
export const API_CREAT_BRAND_COMPANY = "/companies/create-address";
export const API_UPDATE_BRAND_COMPANY = "/companies/update-address";
export const API_DELETE_BRAND_COMPANY = "/companies/delete-address-company";
// HET brand company

// typeCompany
export const API_GETALL_TYPE_COMPANY = "/typecompany/all";
// het typeCompany

//JOB
export const API_JOB_GETLIVEJOB = "/jobs/getLiveJobs";
export const API_JOB_GETJOBFORADMIN = "/jobs/getJobsforadmin";
export const API_JOB_GETNEWJOB = "/jobs/getNewJobs";
export const API_JOB_GETJOBFORCOMPANY = "/jobs/getJobsForCompany";
export const API_JOB_COMPANY_BYID = "/jobs/company";
export const API_JOB_CREATE_BYID = "/jobs/create";
export const API_JOB_EDIT_BYID = "/jobs/edit";
export const API_JOB_GETCANDIDATE_BYIDJOB = "/jobs/getCandidatesbyIdJob";
export const API_JOB_GETCANDIDATEAPPLYING = "/jobs/getCandidatesApplying";
export const API_JOB_DETAIL_BYID = "/jobs/detail";
export const API_JOB_UPDATESTATUS_BYID = "/jobs/updateStatus";
export const API_JOB_APPLYJOB = "/jobs/applyJob";
export const API_JOB_GETJOBAPPLIEDCANDIDATES = "/jobs/getJobAppliedCandidates";
export const API_JOB_CANCELCANDIDATE_BYID = "/jobs/cancelCandidate";
export const API_JOB_SEARCHJOB = "/jobs/searchJob";
export const API_JOB_UPDATEINTERVIEWDATE_BYID = "/jobs/update-interview-date";
export const API_JOB_GETJOBAPPLIEDCANDIDATES_BYID = "/jobs/getJobAppliedCandidatesById";

//HET JOB
export const API_TYPEJOB_GETALL = "/typejob/getAll";
export const API_LEVELJOB_GETALL = "/leveljob/getAll";
export const API_GETJOBSFOR_COMPANY = "/jobs/getJobsForCompany";

//TYPEJOB   

//HET TYPEJOB

//ADMIN
//HET ADMIN

//ULTIS
export const API_MAIL_SEND = "/mail/send";

export const API_ACCOUNT_UPDATE_BYID = "/account/update";

export const API_MAIL_CHECKMAIL = "/auth/checkMail";

export const API_SALARY_GETALL = "/salary/getAll";


//HET ULTIS
