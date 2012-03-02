using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HISDemo.Models;
using jQueryMobileTemplate;

namespace HISDemo.Controllers
{
    public class PatientAdmissionController : Controller
    {
        //
        // GET: /PatientAdmission/

        public ActionResult Index()
        {

            return View();
        }

        //
        // GET: /PatientAdmission/Details/5

        public ActionResult Details(int id)
        {
            return View();
        }

        //
        //// GET: /PatientAdmission/Create

        public ActionResult Create(Patient patient)
        {
            return View(jQueryMobileTemplate.MvcApplication.ActivePatient);
        }



        // POST: /PatientAdmission/Create

        [HttpPost]
        public JavaScriptResult Create(FormCollection collection, Patient patient)
        {
            try
            {
                // TODO: Add insert logic here


                //Patients.All.Last();
                patient.PatientID = jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID;
                UpdateModel(jQueryMobileTemplate.MvcApplication.ActivePatient);
                jQueryMobileTemplate.MvcApplication.ActivePatient.PatientID = patient.PatientID;
                var pa = Patients.All.Where(p => p.PatientID == patient.PatientID).FirstOrDefault();
                if (pa == null)
                {
                    Patients.All.Add(jQueryMobileTemplate.MvcApplication.ActivePatient);
                }
                else
                {
                    UpdateModel(pa);
                    pa.PatientID = patient.PatientID;
                }
                return JavaScript("window.location.href='/PatientInsurance/Create/'");
            }
            catch
            {
                return JavaScript("location.reload(true)");
            }
        }

        //
        // GET: /PatientAdmission/Edit/5

        public ActionResult Edit(int id)
        {
            return View();
        }

        //
        // POST: /PatientAdmission/Edit/5

        [HttpPost]
        public ActionResult Edit(int id, FormCollection collection)
        {
            try
            {
                // TODO: Add update logic here

                return RedirectToAction("Create", "PatientInsurance");
            }
            catch
            {
                return View();
            }
        }

        //
        // GET: /PatientAdmission/Delete/5

        public ActionResult Delete(int id)
        {
            return View();
        }

        //
        // POST: /PatientAdmission/Delete/5

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
    }
}
