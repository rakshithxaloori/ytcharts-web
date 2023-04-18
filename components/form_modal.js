import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

const FormModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          p: 4,
          minWidth: "640px",
          height: "85vh",
        }}
      >
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSfhOJcQhE5R5WpQmew44YwETFLZadPxW7JXsAUpK1YddD-zJA/viewform?embedded=true"
          width="640"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </Box>
    </Modal>
  );
};

export default FormModal;
