"use client";
import { useState } from "react";
import Link from "next/link";
import { IoIosArrowDown } from "react-icons/io";
import {
  useFloating,
  flip,
  shift,
  offset,
  autoUpdate,
  size as floatingSize,
  useHover,
  useFocus,
  useDismiss,
  useInteractions,
  safePolygon,
  FloatingPortal
} from "@floating-ui/react";

/* Heartbeat trace — the nav's signature underline. Flat line with one
   pulse blip, drawn in on hover/focus/active via stroke-dashoffset. */
function PulseTrace() {
  return (
    <svg className="navx-pulse" viewBox="0 0 26 7" preserveAspectRatio="none" aria-hidden="true">
      <path d="M0 3.5 H9 L11.5 0.5 L14 6.5 L16.5 3.5 H26" />
    </svg>
  );
}

function StateRow({ state }) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "left-start",
    open,
    onOpenChange: setOpen,
    middleware: [
      offset(),
      flip({ fallbackPlacements: ["left-end"] }),
      shift({ padding: 8 }),
      floatingSize({
        apply({ availableHeight, elements }) {
          Object.assign(elements.floating.style, {
            maxHeight: `${Math.max(160, Math.min(384, availableHeight - 8))}px`,
          });
        },
        padding: 8,
      }),
    ],
    whileElementsMounted: autoUpdate,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({ buffer: 6 }),
    delay: { open: 0, close: 120 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
  ]);

  if (state.name === "Pondicherry") {
    return (
      <div className="navx-panel-state-row">
        <Link href={"/fertility-centre-in-pondicherry"} className="navx-panel-item font-semibold">
          {state.name}
        </Link>
      </div>
    );
  }

  return (
    <div ref={refs.setReference} className="navx-panel-state-row relative" {...getReferenceProps()}>
      <div tabIndex={0} className="navx-panel-item font-semibold flex justify-between items-center outline-none">
        <span>{state.name}</span>
        {state.branches.length > 0 && (
          <IoIosArrowDown size={13} className="text-gray-400" />
        )}
      </div>

      {open && state.branches.length > 0 && (
        <FloatingPortal>
          <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className="z-50">
            <div className="navx-panel animate-dropdown-in py-2 min-w-[200px] max-h-96 overflow-y-auto overflow-x-hidden">
              {state.branches.map((branch, branchIndex) => (
                <Link href={branch.link} key={branchIndex} className="navx-panel-item block">
                  {branch.item}
                </Link>
              ))}
            </div>
          </div>
        </FloatingPortal>
      )}
    </div>
  );
}

function NavDropdown({ item, pathname }) {
  const [open, setOpen] = useState(false);

  const { refs, floatingStyles, context } = useFloating({
    placement: "bottom-start",
    open,
    onOpenChange: setOpen,
    middleware: [offset(10), flip(), shift({ padding: 16 })],
    whileElementsMounted: autoUpdate,
     transform: false,
  });

  const hover = useHover(context, {
    handleClose: safePolygon({ buffer: 6 }),
    delay: { open: 0, close: 120 },
  });
  const focus = useFocus(context);
  const dismiss = useDismiss(context);

  const { getReferenceProps, getFloatingProps } = useInteractions([
    hover,
    focus,
    dismiss,
  ]);

  const hasPanel =
    (item.dropdownItems && item.dropdownItems.length > 0) ||
    (item.states && item.states.length > 0);

  const isActive = typeof item.item === "string" && pathname === item.link;

  return (
    <li className="relative">
      <div
        ref={refs.setReference}
        {...getReferenceProps()}
        tabIndex={0}
        className={`navx-link ${open ? "navx-link--open" : ""} ${isActive ? "navx-link--active" : ""}`}
      >
        <span className="navx-link-label">
          {typeof item.item === "string" ? (
            <Link href={item.link}>{item.item}</Link>
          ) : (
            item.title
          )}
          {hasPanel && <IoIosArrowDown size={13} className="navx-caret" />}
        </span>
        <PulseTrace />
      </div>

      {item.title === "Treatments" && open && (
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className="z-10">
          <div className="navx-panel animate-dropdown-in w-[min(720px,calc(100vw-32px))] max-w-[720px] py-2">
            <div className="navx-panel-eyebrow">Treatments &amp; Services</div>
            <div className="grid grid-cols-1 min-[1024px]:grid-cols-2 gap-x-2 gap-y-0 px-2 pb-2">
              {item.dropdownItems.map((dropdownItem, dropIndex) => (
                <Link href={dropdownItem.link} key={dropIndex} className="navx-panel-item rounded-lg">
                  {dropdownItem.item ? dropdownItem.item : "Unknown Item"}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}

      {item.title === "Branches" && item.states && open && (
        <div ref={refs.setFloating} style={floatingStyles} {...getFloatingProps()} className="z-10">
          <div className="navx-panel animate-dropdown-in py-1 min-w-[220px]">
            <div className="navx-panel-eyebrow">Find a Centre</div>
            {item.states.map((state) => (
              <StateRow key={state.name} state={state} />
            ))}
          </div>
        </div>
      )}
    </li>
  );
}

export default NavDropdown;