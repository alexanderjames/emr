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

                var searchPateints = allPatients.Where(p => p.Hospitalist == jQueryMobileTemplate.MvcApplication.SearchData.HospitalistNameValue);
                jQueryMobileTemplate.MvcApplication.SearchStart = false;
                return View(searchPateints);
            }
            return View(allPatients);
        }
        
        
        
        //
        // GET: /Patient/Details/5

        public PartialViewResult Details(int id)
        {
            MvcApplication.ActivePatient = Patients.All.Where(p => p.PatientID == id.ToString()).FirstOrDefault();
            return PartialView(MvcApplication.ActivePatient);
        }

        //
        // GET: /Patient/Create

        public ActionResult Create(Patient patient)
        {
            Patient Patient = new Models.Patient();
            if (patient == null)
            {
                
                Patient.PatientID = (Convert.ToInt32(Patients.All.Max(p => p.PatientID)) + 1).ToString();
            }
            else
            {
                patient = MvcApplication.ActivePatient;
            }
            return View(Patient);
        } 

        //
        // POST: /Patient/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection,Patient Patient)
        {
            try
            {
                 //TODO: Add insert logic here
                Patient.PatientID = (Convert.ToInt32(Patients.All.Max(p => p.PatientID)) + 1).ToString();
                Patient.Gender = "Male";
                Patient.Age = "25";
                Patient.DOB = DateTime.Today.ToString("yyyy/mm/dd");
                Patient.DOA = DateTime.Today.ToString("yyyy/mm/dd");
                Patient.PrimaryDiagnosis = "Headeach";
                MvcApplication.ActivePatient = Patient;
                Patients.All.Add(Patient);
                return RedirectToActionPermanent("Create","PatientAdmission",Patient);
            }
            catch
            {
                return View();
            }
        }
        
        //
        // GET: /Patient/Edit/5
 
        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /Patient/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /Patient/Delete/5
 
        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /Patient/Delete/5

        [HttpPost]
        public ActionResult Delete(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add delete logic here
 
                return RedirectToAction("Index");
            }
            catch
            {
                return View();
            }
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
            Patients.Hospitals.ForEach(h => { 
                jQueryMobileTemplate.MvcApplication.SearchData.HospitalName.Add(new SelectListItem{ Value=h,Text=h});   
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
        public void Search(SearchPatients elements)
        {
            jQueryMobileTemplate.MvcApplication.SearchData.FirstName = elements.FirstName;
            jQueryMobileTemplate.MvcApplication.SearchData.LastName = elements.LastName;
            jQueryMobileTemplate.MvcApplication.SearchData.HospitalistNameValue = Request["HospitalistNameValue"];
            jQueryMobileTemplate.MvcApplication.SearchData.HospitalNameValue = Request["HospitalNameValue"];
            jQueryMobileTemplate.MvcApplication.SearchData.PCPValue = Request["PCPValue"];
            jQueryMobileTemplate.MvcApplication.SearchData.SearchCriteriaValue = Request["SearchCriteriaValue"];
            jQueryMobileTemplate.MvcApplication.SearchStart = true;
             Response.Redirect("Index");
        }

    }
}
