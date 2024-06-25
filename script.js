function calculateSGPA() {
  const mc = parseInt(document.getElementById("mc").value);
  const icd = parseInt(document.getElementById("icd").value);
  const ios = parseInt(document.getElementById("ios").value);
  const ieda = parseInt(document.getElementById("ieda").value);
  const ioopsl = parseInt(document.getElementById("ioopsl").value);
  const ioopst = parseInt(document.getElementById("ioopst").value);
  const psa = parseInt(document.getElementById("psa").value);
  const iasr = parseInt(document.getElementById("iasr").value);

  const ecd = parseInt(document.getElementById("ecd").value);
  const eos = parseInt(document.getElementById("eos").value);
  const eoopst = parseInt(document.getElementById("eoopst").value);
  const easr = parseInt(document.getElementById("easr").value);
  const eeda = parseInt(document.getElementById("eeda").value);
  const eoopsl = parseInt(document.getElementById("eoopsl").value);

  const tcd = icd + ecd / 2;
  const tos = ios + eos / 2;
  const toopst = ioopst + eoopst / 2;
  const tasr = iasr + easr / 2;
  const teda = ieda + eeda;
  const toopsl = ioopsl + eoopsl;
  const tmc = mc;
  const tpsa = psa;

  const getGradePoint = (marks) => {
    if (marks > 90) return 10;
    if (marks > 80) return 9;
    if (marks > 70) return 8;
    if (marks > 60) return 7;
    if (marks > 50) return 6;
    if (marks > 40) return 5;
    return 0;
  };

  const getGrade = (marks) => {
    if (marks > 90) return "S";
    if (marks > 80) return "A";
    if (marks > 70) return "B";
    if (marks > 60) return "C";
    if (marks > 50) return "D";
    if (marks > 40) return "E";
    return "F";
  };

  const GPmc = getGradePoint(tmc);
  const GPcd = getGradePoint(tcd);
  const GPos = getGradePoint(tos);
  const GPeda = getGradePoint(teda);
  const GPoopsl = getGradePoint(toopsl);
  const GPoopst = getGradePoint(toopst);
  const GPpsa = getGradePoint(tpsa);
  const GPasr = getGradePoint(tasr);

  const Gmc = getGrade(tmc);
  const Gcd = getGrade(tcd);
  const Gos = getGrade(tos);
  const Geda = getGrade(teda);
  const Goopsl = getGrade(toopsl);
  const Goopst = getGrade(toopst);
  const Gpsa = getGrade(tpsa);
  const Gasr = getGrade(tasr);

  const sgpa =
    (GPmc * 4 +
      GPcd * 4 +
      GPos * 5 +
      GPeda * 4 +
      GPoopsl * 1.5 +
      GPpsa * 0.5 +
      GPoopst * 3 +
      GPasr * 4) /
    26;

  const gradeCard = `
      <table>
          <thead>
              <tr>
                  <th>S.no</th>
                  <th>Course Code</th>
                  <th>Course Name</th>
                  <th>Credits</th>
                  <th>Grade</th>
                  <th>GPA</th>
              </tr>
          </thead>
          <tbody>
              <tr>
                  <td>1</td>
                  <td>21ECSC206</td>
                  <td>Microcontroller: Programming and Interfacing</td>
                  <td>4.00</td>
                  <td>${Gmc}</td>
                  <td>${GPmc}</td>
              </tr>
              <tr>
                  <td>2</td>
                  <td>19ECSC203</td>
                  <td>Principles of Compiler Design</td>
                  <td>4.00</td>
                  <td>${Gcd}</td>
                  <td>${GPcd}</td>
              </tr>
              <tr>
                  <td>3</td>
                  <td>22ECSC202</td>
                  <td>Operating System Principles and Programming</td>
                  <td>5.00</td>
                  <td>${Gos}</td>
                  <td>${GPos}</td>
              </tr>
              <tr>
                  <td>4</td>
                  <td>21ECSC210</td>
                  <td>Exploratory Data Analysis</td>
                  <td>4.00</td>
                  <td>${Geda}</td>
                  <td>${GPeda}</td>
              </tr>
              <tr>
                  <td>5</td>
                  <td>20ECSP203</td>
                  <td>Object Oriented Programming Lab</td>
                  <td>1.50</td>
                  <td>${Goopsl}</td>
                  <td>${GPoopsl}</td>
              </tr>
              <tr>
                  <td>6</td>
                  <td>22EHSH202</td>
                  <td>Problem Solving & Analysis</td>
                  <td>0.50</td>
                  <td>${Gpsa}</td>
                  <td>${GPpsa}</td>
              </tr>
              <tr>
                  <td>7</td>
                  <td>23ECSC204</td>
                  <td>Object Oriented Programming</td>
                  <td>3.00</td>
                  <td>${Goopst}</td>
                  <td>${GPoopst}</td>
              </tr>
              <tr>
                  <td>8</td>
                  <td>20EMAB209</td>
                  <td>Applied Statistics With R</td>
                  <td>4.00</td>
                  <td>${Gasr}</td>
                  <td>${GPasr}</td>
              </tr>
          </tbody>
          <tfoot>
              <tr>
                  <td colspan="4">Total</td>
                  <td colspan="2">26</td>
              </tr>
              <tr>
                  <td colspan="4">SGPA</td>
                  <td colspan="2">${sgpa.toFixed(2)}</td>
              </tr>
          </tfoot>
      </table>
  `;

  document.getElementById("gradeCard").innerHTML = gradeCard;
  document.getElementById("result").style.display = "block";
  document.querySelector(".container").style.display = "none";
}

// function downloadPDF() {
//   const { jsPDF } = window.jspdf;
//   const doc = new jsPDF();

//   doc.html(document.querySelector("#gradeCard"), {
//     callback: function (doc) {
//       doc.save("GradeCard.pdf");
//     },
//     x: 10,
//     y: 10,
//     width: 190,
//     windowWidth: document.body.scrollWidth,
//   });
// }

function goBack() {
  document.getElementById("result").style.display = "none";
  document.querySelector(".container").style.display = "block";
}
