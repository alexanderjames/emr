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
            return View(jQueryMobileTemplate.MvcApplication.ActivePatient);
        }



        [HttpPost]
        public JavaScriptResult Create(FormCollection collection, Patient patient)
        {
            try
            {
                // TODO: Add insert logic here
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
                

                return JavaScript("window.location.href='/PatientBilling/Create/'");
            }
            catch
            {
                return JavaScript("location.reload(true)");
            }
        }



    }
}

