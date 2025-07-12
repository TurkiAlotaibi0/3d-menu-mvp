import { useRouter } from 'next/router';
import { useEffect, useRef } from 'react';

export default function Viewer() {
  const router = useRouter();
  const { id } = router.query;
  const canvasRef = useRef();

  useEffect(() => {
    if (!canvasRef.current) return;
    // Minimal Three.js loader (stub, not functional in this placeholder)
    // In real code, load `/placeholder_models/${id}-*.glb`
  }, [id]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1>Viewer: {id}</h1>
      <canvas ref={canvasRef} width={400} height={400} style={{ border: '1px solid #ccc' }} />
      <br />
      <button style={{ marginTop: 20 }}>Place in AR</button>
    </div>
  );
} 