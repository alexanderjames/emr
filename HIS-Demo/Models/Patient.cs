using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace HISDemo.Models
{
    public class Patient
    {
          public string PatientID { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string MiddleName { get; set; }
        public string Gender { get; set; }
        public string SSN { get; set; }
        public string DOB { get; set; }
        public string Age { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Country { get; set; }
        public string Zip { get; set; }
        public string Phone { get; set; }
        public string CellPhone { get; set; }
        public string PrimaryDiagnosis { get; set; }
        public string DOA { get; set; }
        public string CellPager { get; set; }
        public string Email { get; set; }
        public string PagerEmail { get; set; }
        public DateTime CreatedDate { get; set; }
        public string CreatedBy { get; set; }
        public string ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public string DeleteFlag { get; set; }
        public string ClaimGearPatientID { get; set; }
        public string MaritalStatus { get; set; }
        public string Accountno { get; set; }
        public string Room { get; set; }
        public string Floor { get; set; }
        public string PCP { get; set; }
        public string Hospitalist { get; set; }
        public string Hospital { get; set; }
        public string MRN { get; set; }
        public string RoundingHospitalist { get; set; }
        public string ReferringPhysician { get; set; }
        public string ConsultingPhysician { get; set; }
        public string Payor { get; set; }
        public string DRG { get; set; }
        public string Tlos { get; set; }
        public string Ccost { get; set; }
        public string Icost { get; set; }
        public bool CNH { get; set; }



        // for Patient Insurance
        public string CompanyName { get; set; }
        public string PlanName { get; set; }
        public string plantype { get; set; }
        public string PlanAddress { get; set; }
        public string Authorizationnumber { get; set; }
        public string policynumber { get; set; }
        public string groupnumber { get; set; }
        public string Insuredssn { get; set; }
        public string InsuredName { get; set; }
        public DateTime InsuredDOB { get; set; }
        public DateTime PlanEffectiveDate { get; set; }
        public DateTime PlanTerminationDate { get; set; }


        // for Patient Billing

        public string CPT { get; set; }
        public string ICD { get; set; }
     }
}