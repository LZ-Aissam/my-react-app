export default function Pagination({ total, page, setPage }: any) {
  const pageSize = 10;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div style={{ marginTop: 12 }}>
      <button onClick={() => setPage(page - 1)} disabled={page <= 1}>
        Précédent
      </button>
      <span style={{ margin: "0 10px" }}>
        Page {page} / {pageCount}
      </span>
      <button onClick={() => setPage(page + 1)} disabled={page >= pageCount}>
        Suivant
      </button>
    </div>
  );
}
