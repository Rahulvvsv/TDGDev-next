import { Tooltip } from '@mui/material';
import { GridRenderCellParams } from '@mui/x-data-grid';
import { useEffect, useRef, useState } from 'react';

const RenderExpandableCell = (props) => {
  const [isOverflowed, setIsOverflow] = useState(false);
  const { value } = props;



  return (
    <Tooltip title={<div style={{width:300,height:100
    }}>{value}</div>} placement='bottom-start'
            >
      <span
        style={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          marginTop:50,
          lineHeight:7
        }}
      >
        {value}
      </span>
    </Tooltip>
  );
};

export default RenderExpandableCell;