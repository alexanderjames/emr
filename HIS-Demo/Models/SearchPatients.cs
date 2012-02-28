using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.ComponentModel.DataAnnotations;
using System.Web.Mvc;

namespace HISDemo.Models
{
    public class SearchPatients
    {
        [Required]
        [Display(Name = "First Name")]
        public string FirstName { get; set; }
        [Required]
        [Display(Name = "Last Name")]
        public string LastName { get; set; }
        [Display(Name = "Hospital Name")]
        public string HospitalNameValue;
        [Display(Name = "Hospitalist")]
        public string HospitalistNameValue;
        [Display(Name = "Primary Care Physician")]
        public string PCPValue;
        [Display(Name = "Search Criteria")]
        public string SearchCriteriaValue { get; set; }
         [Display(Name = "Hospital")]
        public List<SelectListItem> HospitalName;
        [Display(Name = "Hospitalist")]
        public List<SelectListItem> HospitalistName;
         [Display(Name = "Primary Care Physician")]
        public List<SelectListItem> PCP;
         [Display(Name = "Search Criteria")]
        public List<SelectListItem> SearchCriteria { get; set; }

    }
}