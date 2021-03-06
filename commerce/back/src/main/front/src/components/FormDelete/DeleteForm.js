import React, { useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { getCatalog, deleteCatalog } from "../../redux/actions/catalogs";
const DeleteForm = ({ dispatch, item, close }) => {
  const catalog = useSelector((state) => state.catalogReducer);

  useEffect(() => {
    dispatch(getCatalog(item));
  }, [item]);

  return (
    <div style={{ width: "400px" }}>
      <Modal.Header>
        <Modal.Title>
          Delete catalog '{catalog.curretnCatalog.name}'
        </Modal.Title>
      </Modal.Header>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => close()}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            dispatch(deleteCatalog(item));
            close();
          }}
        >
          Yes, delete
        </Button>
      </Modal.Footer>
    </div>
  );
};

export default DeleteForm;
