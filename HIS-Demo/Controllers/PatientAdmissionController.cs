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
        // GET: /PatientAdmission/Create

        public ActionResult Create(Patient patient)
        {


          //  return View(Patients.All.Last());
            if (!(patient.LastName == null || patient.LastName == "" || patient.LastName == string.Empty))
                return View(patient);
            else 
            {
                return RedirectToAction("Create", "Patient", patient);
            }
            //else{
            //    return RedirectToAction("Create", "Patient", patient);
            //   // return View(Patients.All.Last());
            //}
        }


        
        // POST: /PatientAdmission/Create

        [HttpPost]
        public ActionResult Create(FormCollection collection, Patient Patient)
        {
            try
            {
                // TODO: Add insert logic here


                var newpateint=Patients.All.Where(p => p.PatientID == Patient.PatientID).FirstOrDefault();
                if (newpateint != null)
                {
                    Patient.ToString().ToArray().CopyTo(newpateint.ToString().ToArray(),0);
                    MvcApplication.ActivePatient = newpateint;
                }
                return RedirectToAction("Create", "PatientInsurance",Patient);
            }
            catch
            {
                return View();
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
