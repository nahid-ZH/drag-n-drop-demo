import "./App.css";
import Layout from "./Components/Layout";
import CarouselComp from "./Components/CarouselComp";
import "bootstrap/dist/css/bootstrap.min.css";
import Product from "./Components/Product";
import DropBox from "./Components/DropBox";
import { useState, createRef } from "react";
import ComponentItem from "./Components/ComponentItem";

function App() {
  const [componentArr, setComponentArr] = useState([]);
  const dropBoxRef = createRef();

  const handleDragStart = (e, type) => {
    e.dataTransfer.setData("Text/html", type);
    dropBoxRef.current.style.background = "#dff9fb";
  };

  const handleDrop = (e) => {
    const type = e.dataTransfer.getData("text/html");
    const id = new Date().getTime();
    setComponentArr([...componentArr, { type, id }]);
    console.log(type);
  };

  const handleDragEnd = (e) => {
    dropBoxRef.current.style.background = "#e9ecef";
  };

  return (
    <div className="vh-100 container-fluid">
      <Layout handleDragStart={handleDragStart} handleDragEnd={handleDragEnd}>
        {componentArr.map((el) => (
          <ComponentItem
            id={el.id}
            dRef={dropBoxRef}
            setComponentArr={setComponentArr}
            handleDragStart={(e) => handleDragStart(e, el.type)}
          >
            {el.type === "CAROUSEL" ? (
              <CarouselComp />
            ) : el.type === "PRODUCT" ? (
              <Product />
            ) : null}
          </ComponentItem>
        ))}
        <DropBox handleOnDrop={handleDrop} dRef={dropBoxRef} />
      </Layout>
    </div>
  );
}

export default App;

const draggables = document.querySelectorAll(".draggable");
const containers = document.querySelectorAll(".dropable");

draggables.forEach((draggable) => {
  draggable.addEventListener("dragstart", () => {
    draggable.classList.add("dragging");
  });

  draggable.addEventListener("dragend", () => {
    draggable.classList.remove("dragging");
  });
});

containers.forEach((container) => {
  container.addEventListener("dragover", (e) => {
    e.preventDefault();
    const afterElement = getDragAfterElement(container, e.clientY);
    const draggable = document.querySelector(".dragging");
    if (afterElement == null) {
      container.appendChild(draggable);
    } else {
      container.insertBefore(draggable, afterElement);
    }
  });
});

function getDragAfterElement(container, y) {
  const draggableElements = [
    ...container.querySelectorAll(".draggable:not(.dragging)"),
  ];

  return draggableElements.reduce(
    (closest, child) => {
      const box = child.getBoundingClientRect();
      const offset = y - box.top - box.height / 2;
      if (offset < 0 && offset > closest.offset) {
        return { offset: offset, element: child };
      } else {
        return closest;
      }
    },
    { offset: Number.NEGATIVE_INFINITY }
  ).element;
}
