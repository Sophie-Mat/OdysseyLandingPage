import React from "react";

const modalButtonClass =
  "bg-regal-blue hover:bg-[#006399] text-white font-bold py-2 px-4 rounded";

const InstructionsAnswersModal = ({
  modalOpen,
  modalTitle,
  setModalTitle,
  modalMenu,
  pdfUrl,
  setModalOpen,
  setPdfUrl,
  text
}) => {
  return modalOpen ? (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
      onClick={() => setModalOpen(false)}
    >
      <div
        className={`bg-[#99d2f0] rounded-lg shadow-lg p-4 flex flex-col relative transition-all duration-300
          ${pdfUrl ? "max-w-3xl w-full h-[80vh]" : "max-w-sm w-full h-auto"}
        `}
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-bold text-[#003d5e]">{modalTitle}</h2>
          <button
            className="absolute top-3 right-5 text-black text-2xl font-bold"
            onClick={() => setModalOpen(false)}
            aria-label="Close"
          >
            &times;
          </button>
        </div>
        {/* Modal Content */}
        {modalMenu === 'instructions' && !pdfUrl && (
          <div className="flex flex-col space-y-4">
            <button
              className={modalButtonClass}
              onClick={() => {
                setPdfUrl(text('instructionsPrimaryLink'));
                setModalTitle(text('instructionsPrimaryText'));
              }
            }
              hidden={text('instructionsPrimaryLink') === "NULL"}
            >
              {text('instructionsPrimaryText')}
            </button>
            <button
              className={modalButtonClass}
              onClick={() => {setPdfUrl(text('instructionsHighLink'));
                setModalTitle(text('instructionsHighText'));
              }}
              hidden={text('instructionsHighLink') === "NULL"}
            >
              {text('instructionsHighText')}
            </button>
          </div>
        )}
        {modalMenu === 'answers' && !pdfUrl && (
          <div className="flex flex-col space-y-4">
            <button
              className={modalButtonClass}
              onClick={() => {setPdfUrl(text('answersPrimaryLink'))
                setModalTitle(text('answersPrimaryText'));
              }}
              hidden={text('answersPrimaryLink') === "NULL"}
            >
              {text('answersPrimaryText')}
            </button>
            <button
              className={modalButtonClass}
              onClick={() => {setPdfUrl(text('answersHighLink'));
                setModalTitle(text('answersHighText'));
              }}
              hidden={text('answersHighLink') === "NULL"}
            >
              {text('answersHighText')}
            </button>
          </div>
        )}
        {pdfUrl && (
          <>
            <iframe
              src={pdfUrl}
              title="PDF Viewer"
              className="flex-1 w-full h-full"
            />
            {(modalMenu === 'instructions' || modalMenu === 'answers') && (
              <button
                className={modalButtonClass + " mt-4"}
                onClick={() => {setPdfUrl("")
                setModalTitle(modalMenu === 'instructions' ? text('instructionsButtonText') : text('answersButtonText'));
                }}
              >
                {text('backButtonText') || "Back to Menu"}
              </button>
            )}
          </>
        )}
      </div>
    </div>
  ) : null;
};

export default InstructionsAnswersModal;