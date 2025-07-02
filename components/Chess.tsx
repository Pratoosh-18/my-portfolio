"use client"
import { useState, useCallback } from "react"

type PieceType = "king" | "queen" | "rook" | "bishop" | "knight" | "pawn"
type PieceColor = "white" | "black"

interface Piece {
  type: PieceType
  color: PieceColor
}

interface Position {
  row: number
  col: number
}

const initialBoard: (Piece | null)[][] = [
  [
    { type: "rook", color: "black" },
    { type: "knight", color: "black" },
    { type: "bishop", color: "black" },
    { type: "queen", color: "black" },
    { type: "king", color: "black" },
    { type: "bishop", color: "black" },
    { type: "knight", color: "black" },
    { type: "rook", color: "black" },
  ],
  [
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
    { type: "pawn", color: "black" },
  ],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
    { type: "pawn", color: "white" },
  ],
  [
    { type: "rook", color: "white" },
    { type: "knight", color: "white" },
    { type: "bishop", color: "white" },
    { type: "queen", color: "white" },
    { type: "king", color: "white" },
    { type: "bishop", color: "white" },
    { type: "knight", color: "white" },
    { type: "rook", color: "white" },
  ],
]

const pieceSymbols: Record<PieceColor, Record<PieceType, string>> = {
  white: {
    king: "♔",
    queen: "♕",
    rook: "♖",
    bishop: "♗",
    knight: "♘",
    pawn: "♙",
  },
  black: {
    king: "♚",
    queen: "♛",
    rook: "♜",
    bishop: "♝",
    knight: "♞",
    pawn: "♟",
  },
}

export function Chess() {
  const [board, setBoard] = useState<(Piece | null)[][]>(initialBoard)
  const [selectedSquare, setSelectedSquare] = useState<Position | null>(null)
  const [currentPlayer, setCurrentPlayer] = useState<PieceColor>("white")
  const [validMoves, setValidMoves] = useState<Position[]>([])

  const isValidPosition = (row: number, col: number): boolean => {
    return row >= 0 && row < 8 && col >= 0 && col < 8
  }

  const getValidMoves = useCallback(
    (piece: Piece, fromRow: number, fromCol: number): Position[] => {
      const moves: Position[] = []

      switch (piece.type) {
        case "pawn":
          const direction = piece.color === "white" ? -1 : 1
          const startRow = piece.color === "white" ? 6 : 1

          // Move forward
          if (isValidPosition(fromRow + direction, fromCol) && !board[fromRow + direction][fromCol]) {
            moves.push({ row: fromRow + direction, col: fromCol })

            // Double move from start
            if (fromRow === startRow && !board[fromRow + 2 * direction][fromCol]) {
              moves.push({ row: fromRow + 2 * direction, col: fromCol })
            }
          }

          // Capture diagonally
          for (const colOffset of [-1, 1]) {
            const newRow = fromRow + direction
            const newCol = fromCol + colOffset
            if (
              isValidPosition(newRow, newCol) &&
              board[newRow][newCol] &&
              board[newRow][newCol]!.color !== piece.color
            ) {
              moves.push({ row: newRow, col: newCol })
            }
          }
          break

        case "rook":
          // Horizontal and vertical moves
          for (const [dRow, dCol] of [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
          ]) {
            for (let i = 1; i < 8; i++) {
              const newRow = fromRow + i * dRow
              const newCol = fromCol + i * dCol
              if (!isValidPosition(newRow, newCol)) break

              if (!board[newRow][newCol]) {
                moves.push({ row: newRow, col: newCol })
              } else {
                if (board[newRow][newCol]!.color !== piece.color) {
                  moves.push({ row: newRow, col: newCol })
                }
                break
              }
            }
          }
          break

        case "bishop":
          // Diagonal moves
          for (const [dRow, dCol] of [
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            for (let i = 1; i < 8; i++) {
              const newRow = fromRow + i * dRow
              const newCol = fromCol + i * dCol
              if (!isValidPosition(newRow, newCol)) break

              if (!board[newRow][newCol]) {
                moves.push({ row: newRow, col: newCol })
              } else {
                if (board[newRow][newCol]!.color !== piece.color) {
                  moves.push({ row: newRow, col: newCol })
                }
                break
              }
            }
          }
          break

        case "queen":
          // Combination of rook and bishop
          for (const [dRow, dCol] of [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            for (let i = 1; i < 8; i++) {
              const newRow = fromRow + i * dRow
              const newCol = fromCol + i * dCol
              if (!isValidPosition(newRow, newCol)) break

              if (!board[newRow][newCol]) {
                moves.push({ row: newRow, col: newCol })
              } else {
                if (board[newRow][newCol]!.color !== piece.color) {
                  moves.push({ row: newRow, col: newCol })
                }
                break
              }
            }
          }
          break

        case "king":
          // One square in any direction
          for (const [dRow, dCol] of [
            [0, 1],
            [0, -1],
            [1, 0],
            [-1, 0],
            [1, 1],
            [1, -1],
            [-1, 1],
            [-1, -1],
          ]) {
            const newRow = fromRow + dRow
            const newCol = fromCol + dCol
            if (
              isValidPosition(newRow, newCol) &&
              (!board[newRow][newCol] || board[newRow][newCol]!.color !== piece.color)
            ) {
              moves.push({ row: newRow, col: newCol })
            }
          }
          break

        case "knight":
          // L-shaped moves
          for (const [dRow, dCol] of [
            [2, 1],
            [2, -1],
            [-2, 1],
            [-2, -1],
            [1, 2],
            [1, -2],
            [-1, 2],
            [-1, -2],
          ]) {
            const newRow = fromRow + dRow
            const newCol = fromCol + dCol
            if (
              isValidPosition(newRow, newCol) &&
              (!board[newRow][newCol] || board[newRow][newCol]!.color !== piece.color)
            ) {
              moves.push({ row: newRow, col: newCol })
            }
          }
          break
      }

      return moves
    },
    [board],
  )

  const handleSquareClick = (row: number, col: number) => {
    if (selectedSquare) {
      // Check if this is a valid move
      const isValidMove = validMoves.some((move) => move.row === row && move.col === col)

      if (isValidMove) {
        // Make the move
        const newBoard = board.map((r) => [...r])
        const piece = newBoard[selectedSquare.row][selectedSquare.col]
        newBoard[selectedSquare.row][selectedSquare.col] = null
        newBoard[row][col] = piece

        setBoard(newBoard)
        setCurrentPlayer(currentPlayer === "white" ? "black" : "white")
      }

      setSelectedSquare(null)
      setValidMoves([])
    } else {
      // Select a piece
      const piece = board[row][col]
      if (piece && piece.color === currentPlayer) {
        setSelectedSquare({ row, col })
        setValidMoves(getValidMoves(piece, row, col))
      }
    }
  }

  const resetGame = () => {
    setBoard(initialBoard)
    setSelectedSquare(null)
    setValidMoves([])
    setCurrentPlayer("white")
  }

  const isSquareSelected = (row: number, col: number) => {
    return selectedSquare?.row === row && selectedSquare?.col === col
  }

  const isValidMoveSquare = (row: number, col: number) => {
    return validMoves.some((move) => move.row === row && move.col === col)
  }

  return (
    <div className="flex flex-col h-full bg-gray-900 text-white p-4">
      {/* Game Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-bold">Chess Game</h1>
        <button
          onClick={resetGame}
          className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm transition-colors"
        >
          New Game
        </button>
      </div>

      {/* Game Status */}
      <div className="text-center mb-4">
        <p className="text-sm text-gray-400">{currentPlayer === "white" ? "White" : "Black"} to move</p>
      </div>

      {/* Chess Board */}
      <div className="flex-1 flex items-center justify-center">
        <div className="grid grid-cols-8 gap-0 border-2 border-gray-600 bg-gray-800">
          {board.map((row, rowIndex) =>
            row.map((piece, colIndex) => {
              const isLight = (rowIndex + colIndex) % 2 === 0
              const isSelected = isSquareSelected(rowIndex, colIndex)
              const isValidMove = isValidMoveSquare(rowIndex, colIndex)

              return (
                <div
                  key={`${rowIndex}-${colIndex}`}
                  className={`w-16 h-16 flex items-center justify-center cursor-pointer text-4xl font-bold transition-colors ${
                    isLight ? "bg-amber-100" : "bg-amber-800"
                  } ${isSelected ? "ring-4 ring-blue-500" : ""} ${
                    isValidMove ? "ring-2 ring-green-500 bg-green-200" : ""
                  } hover:brightness-110`}
                  onClick={() => handleSquareClick(rowIndex, colIndex)}
                >
                  {piece && (
                    <span
                      className={`${
                        piece.color === "white" ? "text-black drop-shadow-sm" : "text-black drop-shadow-sm"
                      } select-none`}
                      style={{
                        textShadow:
                          piece.color === "white"
                            ? "0 0 2px rgba(255,255,255,0.8), 0 0 4px rgba(255,255,255,0.6)"
                            : "0 0 2px rgba(0,0,0,0.8)",
                      }}
                    >
                      {pieceSymbols[piece.color][piece.type]}
                    </span>
                  )}
                  {isValidMove && !piece && <div className="w-4 h-4 bg-green-500 rounded-full opacity-70"></div>}
                </div>
              )
            }),
          )}
        </div>
      </div>

      {/* Game Instructions */}
      <div className="mt-4 text-center text-sm text-gray-400">
        <p>Click on a piece to select it, then click on a highlighted square to move.</p>
        <p>White pieces move first. Take turns to play!</p>
      </div>
    </div>
  )
}
