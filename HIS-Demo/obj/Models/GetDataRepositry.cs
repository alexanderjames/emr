using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Routing;
using System.IO;
using System.Xml;
using System.Xml.Linq;

namespace HISDemo.Models
{
   
    public static class Patients
    {
        public static List<Patient> All { get; set; }

        static Patients()
        {
            // Parse the XML
            All = new List<Patient>();
            Hospitalists = new List<string>();
            Hospitals = new List<string>();
            Diagnosis = new List<string>();
            PCP = new List<string>();
            var xmlFilename = HttpContext.Current.Server.MapPath("~/Content/AllPatients.xml");
            var xml = XDocument.Load(xmlFilename);
            var allpatients = xml.Root.Elements();
            try
            {
                allpatients.ToList().ForEach(s =>
                {
                    All.Add(new Patient
                    {

                        PatientID = s.Element("PatientID").Value,
                        FirstName = s.Element("FName").Value,
                        LastName = s.Element("LName").Value,
                        MiddleName = s.Element("MName").Value,
                        Gender = s.Element("Gender").Value.ToString().Substring(0, 1),
                        DOB = s.Element("DOB").Value,
                        Address1 = s.Element("Address").Value,
                        Age = s.Element("Age").Value,
                        DOA = s.Element("DOA").Value,
                        PrimaryDiagnosis = s.Element("pDiagnosis").Value,
                        Room = s.Element("Room").Value,
                        Floor = s.Element("Floor").Value,
                        Hospitalist = s.Element("Hospitalist").Value,
                        //Address2 = s.Element("Address2").Value,
                        City = s.Element("City").Value,
                        State = s.Element("State").Value,
                        Country = s.Element("Country").Value,
                        Zip = s.Element("Zip").Value,
                        Phone = s.Element("Phone").Value,
                        PCP = s.Element("PCP").Value,
                        //CellPhone = s.Element("CellPhone").Value,
                        //CellPager = s.Element("CellPager").Value,
                        Email = s.Element("Email").Value,
                        PagerEmail = s.Element("PagerEmail").Value
                        //CreatedDate = ParseStartDate(s.Element("CreatedDate").Value),
                        //CreatedBy = s.Element("CreatedBy").Value,
                        //ModifiedBy = s.Element("ModifiedBy").Value,
                        //ModifiedDate = ParseStartDate(s.Element("ModifiedDate").Value),
                        //DeleteFlag = s.Element("DeleteFlag").Value
                        //ClaimGearPatientID = s.Element("ClaimGearPatientID").Value,
                        //MaritalStatus = s.Element("MaritalStatus").Value,
                        //Accountno = s.Element("Accountno").Value
                    });
                    Hospitals.Add(new string(s.Element("Hopital").Value.ToCharArray()));
                    Hospitalists.Add(new string(s.Element("Hospitalist").Value.ToCharArray()));
                    Diagnosis.Add(new string(s.Element("pDiagnosis").Value.ToCharArray()));
                    PCP.Add(new string(s.Element("PCP").Value.ToCharArray()));
                });
            }
            catch (Exception ex)
            {
                string msg = ex.Message;
            }


        }

        private static DateTime ParseStartDate(string dateString)
        {
            // Parse text strictly of the form "Thu, Apr 14 12:00 PM - 1:00 PM"
            var date = dateString.Substring(5, 6);
            var time = dateString.Substring(11, 9);
            var combined = date + " 2011, " + time;
            return DateTime.Parse(combined);
        }

        public static List<string> Hospitals { get; set; }
        public static List<string> Hospitalists { get; set; }
        public static List<string> Diagnosis { get; set; }
        public static List<string> PCP { get; set; }
    }
}