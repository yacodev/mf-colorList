import Swal from 'sweetalert2';

export const ColorList = ({ colorsList }) => {
  const handleCopyColor = (color) => {
    Swal.fire({
      title: 'Color copied!',
      text: `Color ${color} copied to clipboard`,
      icon: 'success',
      confirmButtonText: 'Ok',
      timer: 1000,
      timerProgressBar: true,
    });
  };

  return (
    <div className='list-group text-center'>
      {colorsList?.map((color, index) => (
        <button
          key={index}
          type='submit'
          className='list-group-item list-group-item-action'
          aria-current='true'
          title='copiar'
          onClick={() => handleCopyColor(color)}
          style={{
            background: color,
            fontWeight: 'bolder',
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};
