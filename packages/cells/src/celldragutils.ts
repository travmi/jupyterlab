/*-----------------------------------------------------------------------------
| Copyright (c) Jupyter Development Team.
| Distributed under the terms of the Modified BSD License.
|----------------------------------------------------------------------------*/

/**
 * This module contains some utility functions to operate on cells. This
 * could be shared by widgets that contain cells, like the CodeConsole or
 * Notebook widgets.
 */

import { each, IterableOrArrayLike } from '@lumino/algorithm';
import { ICodeCellModel } from './model';
import { Cell } from './widget';
import { h, VirtualDOM } from '@lumino/virtualdom';
import { nbformat } from '@jupyterlab/coreutils';

/**
 * Constants for drag
 */

/**
 * The threshold in pixels to start a drag event.
 */
const DRAG_THRESHOLD = 5;
/**
 * The class name added to drag images.
 */
const DRAG_IMAGE_CLASS = 'jp-dragImage';

/**
 * The class name added to singular drag images
 */
const SINGLE_DRAG_IMAGE_CLASS = 'jp-dragImage-singlePrompt';

/**
 * The class name added to the drag image cell content.
 */
const CELL_DRAG_CONTENT_CLASS = 'jp-dragImage-content';

/**
 * The class name added to the drag image cell content.
 */
const CELL_DRAG_PROMPT_CLASS = 'jp-dragImage-prompt';

/**
 * The class name added to the drag image cell content.
 */
const CELL_DRAG_MULTIPLE_BACK = 'jp-dragImage-multipleBack';

export namespace CellDragUtils {
  export type ICellTargetArea = 'input' | 'prompt' | 'cell' | 'unknown';

  /**
   * Find the cell index containing the target html element.
   * This function traces up the DOM hierarchy to find the root cell
   * node. Then find the corresponding child and select it.
   *
   * @param node - the cell node or a child of the cell node.
   * @param cells - an iterable of Cells
   * @param isCellNode - a function that takes in a node and checks if
   * it is a cell node.
   *
   * @returns index of the cell we're looking for. Returns -1 if
   * the cell is not founds
   */
  export function findCell(
    node: HTMLElement,
    cells: IterableOrArrayLike<Cell>,
    isCellNode: (node: HTMLElement) => boolean
  ): number {
    let cellIndex: number = -1;
    while (node && node.parentElement) {
      if (isCellNode(node)) {
        each(cells, (cell, index) => {
          if (cell.node === node) {
            cellIndex = index;
            return false;
          }
        });
        break;
      }
      node = node.parentElement;
    }
    return cellIndex;
  }

  /**
   * Detect which part of the cell triggered the MouseEvent
   *
   * @param cell - The cell which contains the MouseEvent's target
   * @param target - The DOM node which triggered the MouseEvent
   */
  export function detectTargetArea(
    cell: Cell,
    target: HTMLElement
  ): ICellTargetArea {
    let targetArea: ICellTargetArea = null;
    if (cell) {
      if (cell.editorWidget.node.contains(target)) {
        targetArea = 'input';
      } else if (cell.promptNode.contains(target)) {
        targetArea = 'prompt';
      } else {
        targetArea = 'cell';
      }
    } else {
      targetArea = 'unknown';
    }
    return targetArea;
  }

  /**
   * Detect if a drag event should be started. This is down if the
   * mouse is moved beyond a certain distance (DRAG_THRESHOLD).
   *
   * @param prevX - X Coordinate of the mouse pointer during the mousedown event
   * @param prevY - Y Coordinate of the mouse pointer during the mousedown event
   * @param nextX - Current X Coordinate of the mouse pointer
   * @param nextY - Current Y Coordinate of the mouse pointer
   */
  export function shouldStartDrag(
    prevX: number,
    prevY: number,
    nextX: number,
    nextY: number
  ): boolean {
    let dx = Math.abs(nextX - prevX);
    let dy = Math.abs(nextY - prevY);
    return dx >= DRAG_THRESHOLD || dy >= DRAG_THRESHOLD;
  }

  /**
   * Create an image for the cell(s) to be dragged
   *
   * @param activeCell - The cell from where the drag event is triggered
   * @param selectedCells - The cells to be dragged
   */
  export function createCellDragImage(
    activeCell: Cell,
    selectedCells: nbformat.ICell[]
  ): HTMLElement {
    const count = selectedCells.length;
    let promptNumber: string;
    if (activeCell.model.type === 'code') {
      let executionCount = (activeCell.model as ICodeCellModel).executionCount;
      promptNumber = ' ';
      if (executionCount) {
        promptNumber = executionCount.toString();
      }
    } else {
      promptNumber = '';
    }

    const cellContent = activeCell.model.value.text.split('\n')[0].slice(0, 26);
    if (count > 1) {
      if (promptNumber !== '') {
        return VirtualDOM.realize(
          h.div(
            h.div(
              { className: DRAG_IMAGE_CLASS },
              h.span(
                { className: CELL_DRAG_PROMPT_CLASS },
                '[' + promptNumber + ']:'
              ),
              h.span({ className: CELL_DRAG_CONTENT_CLASS }, cellContent)
            ),
            h.div({ className: CELL_DRAG_MULTIPLE_BACK }, '')
          )
        );
      } else {
        return VirtualDOM.realize(
          h.div(
            h.div(
              { className: DRAG_IMAGE_CLASS },
              h.span({ className: CELL_DRAG_PROMPT_CLASS }),
              h.span({ className: CELL_DRAG_CONTENT_CLASS }, cellContent)
            ),
            h.div({ className: CELL_DRAG_MULTIPLE_BACK }, '')
          )
        );
      }
    } else {
      if (promptNumber !== '') {
        return VirtualDOM.realize(
          h.div(
            h.div(
              { className: `${DRAG_IMAGE_CLASS} ${SINGLE_DRAG_IMAGE_CLASS}` },
              h.span(
                { className: CELL_DRAG_PROMPT_CLASS },
                '[' + promptNumber + ']:'
              ),
              h.span({ className: CELL_DRAG_CONTENT_CLASS }, cellContent)
            )
          )
        );
      } else {
        return VirtualDOM.realize(
          h.div(
            h.div(
              { className: `${DRAG_IMAGE_CLASS} ${SINGLE_DRAG_IMAGE_CLASS}` },
              h.span({ className: CELL_DRAG_PROMPT_CLASS }),
              h.span({ className: CELL_DRAG_CONTENT_CLASS }, cellContent)
            )
          )
        );
      }
    }
  }
}
