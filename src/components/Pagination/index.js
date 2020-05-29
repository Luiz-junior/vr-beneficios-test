import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContainerPagination, PaginationContent, PrevBtn, NextBtn } from './styles';
import { setOffset } from '../../store/action/pokemonAction';

function Pagination() {
  const dispatch = useDispatch();

  const [disabled, setDisabled] = useState(false)
  const [color, setColor] = useState('#333')

  const { offset } = useSelector(state => ({
    offset: state.pokemonReducer.offset
  }));

  useEffect(() => {
    if (offset === 0) {
      setDisabled(true)
      setColor('#999')
    } else {
      setDisabled(false)
      setColor('#333')
    }

  }, [offset, setDisabled]);

  const onChangePage = (newOffSet) => dispatch(setOffset(newOffSet));

  return (
    <ContainerPagination>
      <PaginationContent>
        <PrevBtn
          onClick={() => onChangePage(offset - 8)}
          id="btn-prev"
          disabled={disabled}
          style={{ color }}
        > ❮
        </PrevBtn>

        <NextBtn onClick={() => onChangePage(offset + 8)}> ❯ </NextBtn>
      </PaginationContent>
    </ContainerPagination>
  )
}

export default Pagination;
