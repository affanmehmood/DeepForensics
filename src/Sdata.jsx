import img1 from "./image/objrec.png";
import img2 from "./image/objidf.png";
import img3 from "./image/objlb.png";
import img4 from "./image/frmenh.png";
import img5 from "./image/rptgen.png";
import img6 from "./image/usrfrn.png";

const Sdata = [
  {
    key: 1,
    imgsrc: img1,
    title: "Object Recognition",
    text:
      "Recognize a set of objects from the footage that need to be processed.",
  },
  {
    key: 2,
    imgsrc: img2,
    title: "Object Identification",
    text: "Match the objects from the footage and the database.",
  },
  {
    key: img3,
    imgsrc: "objlb.png",
    title: "Object Labeling",
    text: "Assign labels to the desired objects that are recognized.",
  },
  {
    key: 4,
    imgsrc: img4,
    title: "Frame Enhancement",
    text: "Apply filter(s) on a specific frame from a collection of filters.",
  },
  {
    key: 5,
    imgsrc: img5,
    title: "Report Generation",
    text:
      "Compile all of the extracted information from evidence videos into a report.",
  },
  {
    key: 6,
    imgsrc: img6,
    title: "User Friendly Frontend",
    text:
      "Presenting the UI to the user in a easy to understand and use manner.",
  },
];
export default Sdata;
