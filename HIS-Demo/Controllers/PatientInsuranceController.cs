using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using HISDemo.Models;

namespace HISDemo.Controllers
{
    public class PatientInsuranceController : Controller
    {
        //
        // GET: /PatientInsurance/

        public ActionResult Create(Patient patient)
        {

            //return View(Patients.All.Last());

           // if (!(patient.MRN == null || patient.MRN == "" || patient.MRN == string.Empty))
                return View(patient);
            //else
            //    return RedirectToActionPermanent("Create", "PatientAdmission", patient);


        }



        [HttpPost]
        public ActionResult Create(FormCollection collection, Patient Patient)
        {
            try
            {
                // TODO: Add insert logic here

                Patients.All.Add(Patient);


                return RedirectToAction("Create", "PatientBilling");
            }
            catch
            {
                return View();
            }
        }



    }
}

