using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HISDemo.Models;
using jQueryMobileTemplate;

namespace HISDemo.Controllers
{

    public class PatientController : Controller
    {
        //
        // GET: /Patient/

        public ActionResult Index()
        {
            ViewBag.NumPatients = Patients.All.Count;

            var allPatients = Patients.All.Distinct().OrderBy(x => x.PatientID);
            if (jQueryMobileTemplate.MvcApplication.SearchStart == true)
            {

                var searchPateints = allPatients.Where(p => p.Hospitalist == jQueryMobileTemplate.MvcApplication.SearchData.HospitalistNameValue || p.PCP == jQueryMobileTemplate.MvcApplication.SearchData.PCPValue || p.Hospital == jQueryMobileTemplate.MvcApplication.SearchData.HospitalNameValue || string.Equals(jQueryMobileTemplate.MvcApplication.SearchData.FirstName, p.FirstName, StringComparison.InvariantCultureIgnoreCase) || string.Equals(jQueryMobileTemplate.MvcApplication.SearchData.LastName, p.LastName, StringComparison.InvariantCultureIgnoreCase));
                jQueryMobileTemplate.MvcApplication.SearchStart = false;
                return View(searchPateints);

            }
            return View(allPatients);
        }



        //
        // GET: /Patient/Details/5

        public PartialViewResult Details(int id)
        {
            jQueryMobileTemplate.MvcApplication.IsNewPatient = false;
            MvcApplication.ActivePatient = Patients.All.Where(p => p.PatientID == id.ToString()).FirstOrDefault();
            return PartialView(MvcApplication.ActivePatient);
        }

        //
        // GET: /Patient/Create

        public ActionResult Create()
        {

            if (jQueryMobileTemplate.MvcApplication.IsNewPatient == true)
            {
                jQueryMobileTemplate.MvcApplication.ActivePatient = new Patient();
                var NewID = (Convert.ToInt32(Patients.All.Max(p => p.PatientID)) + 1).ToString();
                jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID = NewID;

            }
            return View(jQueryMobileTemplate.MvcApplication.ActivePatient);

        }

        //
        // POST: /Patient/Create

        [HttpPost]
        public JavaScriptResult Create(FormCollection collection, Patient Patient)
        {
            try
            {
                //TODO: Add insert logic here
                Patient.PatientID = (Convert.ToInt32(Patients.All.Max(p => p.PatientID)) + 1).ToString();
                UpdateModel(jQueryMobileTemplate.MvcApplication.ActivePatient);
                jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID = Patient.PatientID;
                var pa = Patients.All.Where(p => p.PatientID == Patient.PatientID).FirstOrDefault();
                if (pa == null)
                {
                    Patients.All.Add(jQueryMobileTemplate.MvcApplication.ActivePatient);
                }
                else
                {
                    UpdateModel(pa);
                    pa.PatientID = Patient.PatientID;
                }
                return JavaScript("window.location.href='/PatientAdmission/Create/'");
            }

            catch
            {
                return JavaScript("location.reload(true)");
            }
        }

        public void AsNewPatient()
        {
            jQueryMobileTemplate.MvcApplication.IsNewPatient = true;
        }



        [HttpGet]
        public ActionResult Search()
        {
            jQueryMobileTemplate.MvcApplication.SearchData.HospitalName = new List<SelectListItem>();
            jQueryMobileTemplate.MvcApplication.SearchData.HospitalistName = new List<SelectListItem>();
            jQueryMobileTemplate.MvcApplication.SearchData.PCP = new List<SelectListItem>();
            jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteria = new List<SelectListItem>();
            jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteria.Add(new SelectListItem { Text = "=", Value = "=" });
            jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteria.Add(new SelectListItem { Text = ">", Value = ">" });
            jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteria.Add(new SelectListItem { Text = "<", Value = "<" });
            Patients.Hospitals.ForEach(h =>
            {
                jQueryMobileTemplate.MvcApplication.SearchData.HospitalName.Add(new SelectListItem { Value = h, Text = h });
            });
            Patients.Hospitalists.ForEach(h =>
            {
                jQueryMobileTemplate.MvcApplication.SearchData.HospitalistName.Add(new SelectListItem { Value = h, Text = h });
            });
            Patients.PCP.ForEach(h =>
            {
                jQueryMobileTemplate.MvcApplication.SearchData.PCP.Add(new SelectListItem { Value = h, Text = h });
            });


            return View(jQueryMobileTemplate.MvcApplication.SearchData);
        }
        [HttpPost]
        public JavaScriptResult Search(SearchPatients elements)
        {
            try
            {
                jQueryMobileTemplate.MvcApplication.SearchData.FirstName = elements.FirstName;
                jQueryMobileTemplate.MvcApplication.SearchData.LastName = elements.LastName;
                jQueryMobileTemplate.MvcApplication.SearchData.HospitalistNameValue = Request["HospitalistNameValue"];
                jQueryMobileTemplate.MvcApplication.SearchData.HospitalNameValue = Request["HospitalNameValue"];
                jQueryMobileTemplate.MvcApplication.SearchData.PCPValue = Request["PCPValue"];
                jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteriaValue = Request["SearchCriteriaValue"];
                jQueryMobileTemplate.MvcApplication.SearchStart = true;
                return JavaScript("window.location.href='/Patient/Index/'");
            }
            catch
            {
                return JavaScript("location.reload(true)");
            }
        }

    }
}
